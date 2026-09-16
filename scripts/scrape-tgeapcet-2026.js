const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const TARGET_URL = "https://tgeapcet.nic.in/college_allotment.aspx";
const OUTPUT_DIR = path.resolve(__dirname, "../data/tgeapcet-2026");

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const text = String(value).trim();
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function toCsv(rows) {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  return [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => headers.map((h) => csvEscape(row[h])).join(",")),
  ].join("\n");
}

async function waitForNavigationOrIdle(page) {
  try {
    await page.waitForNavigation({ waitUntil: "networkidle2", timeout: 60000 });
  } catch (error) {
    // ASP.NET postbacks may finish without a conventional navigation event.
    await page.waitForNetworkIdle({ idleTime: 1000, timeout: 15000 }).catch(() => {});
  }
}

async function scrape() {
  console.log(`Starting 2026 TGEAPCET scraper: ${TARGET_URL}`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140.0.0.0 Safari/537.36"
  );

  try {
    await page.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });

    // The official portal can require an authenticated/session browser.
    // Never attempt to bypass its security controls; fail clearly instead.
    const securityText = await page.evaluate(() => document.body?.innerText || "");
    if (/security reasons|re-login|relogin/i.test(securityText)) {
      throw new Error(
        "TGEAPCET returned its security/session page. Run this scraper with a legitimate active portal session; no security bypass is attempted."
      );
    }

    const collegeSelector = "#MainContent_DropDownList1";
    const branchSelector = "#MainContent_DropDownList2";
    const submitSelector = "#MainContent_btn_allot";
    const tableSelector = "table.sortable";

    await page.waitForSelector(collegeSelector, { timeout: 30000 });

    const colleges = await page.evaluate((selector) =>
      Array.from(document.querySelector(selector).options)
        .map((option) => ({ name: option.textContent.trim(), value: option.value }))
        .filter((option) => option.value && option.value !== "0"),
      collegeSelector
    );

    console.log(`Found ${colleges.length} colleges.`);

    for (const college of colleges) {
      const safeCollege = college.name.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "");
      const collegeDir = path.join(OUTPUT_DIR, `${college.value}_${safeCollege}`);
      fs.mkdirSync(collegeDir, { recursive: true });

      try {
        await page.select(collegeSelector, college.value);
        await waitForNavigationOrIdle(page);
        await page.waitForSelector(branchSelector, { timeout: 30000 });

        const branches = await page.evaluate((selector) =>
          Array.from(document.querySelector(selector).options)
            .map((option) => ({ name: option.textContent.trim(), value: option.value }))
            .filter((option) => option.value && option.value !== "0"),
          branchSelector
        );

        console.log(`${college.value}: ${college.name} -> ${branches.length} branches`);

        for (const branch of branches) {
          try {
            // Re-establish college context before every branch postback.
            await page.select(collegeSelector, college.value);
            await waitForNavigationOrIdle(page);
            await page.waitForSelector(branchSelector, { timeout: 30000 });
            await page.select(branchSelector, branch.value);

            await page.click(submitSelector);
            await waitForNavigationOrIdle(page);
            await page.waitForSelector(tableSelector, { timeout: 30000 });

            const rows = await page.evaluate((selector) => {
              const table = document.querySelector(selector);
              if (!table) return [];
              return Array.from(table.querySelectorAll("tr")).slice(1).map((tr) => {
                const cells = Array.from(tr.querySelectorAll("td")).map((td) => td.innerText.trim());
                if (cells.length < 2) return null;
                return {
                  sno: cells[0] || "",
                  hallticketno: cells[1] || "",
                  rank: cells[2] || "",
                  name: cells[3] || "",
                  sex: cells[4] || "",
                  caste: cells[5] || "",
                  region: cells[6] || "",
                  seatcategory: cells[7] || "",
                };
              }).filter(Boolean);
            }, tableSelector);

            if (rows.length) {
              const safeBranch = branch.name.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "");
              fs.writeFileSync(
                path.join(collegeDir, `${branch.value}_${safeBranch}.csv`),
                toCsv(rows),
                "utf8"
              );
              console.log(`  OK ${branch.name}: ${rows.length} rows`);
            } else {
              console.log(`  EMPTY ${branch.name}`);
            }
          } catch (error) {
            console.error(`  FAILED ${college.name} -> ${branch.name}: ${error.message}`);
          }
        }
      } catch (error) {
        console.error(`FAILED college ${college.name}: ${error.message}`);
      }
    }

    console.log(`Finished. Data directory: ${OUTPUT_DIR}`);
  } finally {
    await browser.close();
  }
}

scrape().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
