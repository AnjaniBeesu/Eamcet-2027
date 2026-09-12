import CutoffTable from "@/components/CutoffTable";

export const revalidate = 86400;

const SOURCE = "https://www.manabadi.co.in/entrance-Exams/ts-eamcet-list-of-colleges-and-courses.asp";

function clean(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

const engineeringBranches = new Set([
  "AI", "AID", "AIM", "ANE", "AUT", "BIO", "BME", "CHE", "CIC", "CIV", "CMS", "CSB", "CSC", "CSD", "CSE", "CSI", "CSM", "CSN", "CSO", "ECE", "ECI", "EEE", "EIE", "ETM", "EVL", "GEO", "INF", "MCT", "MEC", "MET", "MIN", "MMS", "MMT", "MTE", "PHE", "RAI", "CSG", "CSW"
]);

export type CutoffCourseRow = {
  code: string;
  name: string;
  place: string;
  branch: string;
  branchName: string;
};

async function getCourses(): Promise<CutoffCourseRow[]> {
  try {
    const response = await fetch(SOURCE, { next: { revalidate: 86400 } });
    if (!response.ok) throw new Error(`Source returned ${response.status}`);
    const html = await response.text();
    const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    const parsed = rows.map((match) => {
      const cells = [...match[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => clean(m[1]));
      return cells;
    }).filter((cells) => cells.length >= 13);

    const unique = new Map<string, CutoffCourseRow>();
    for (const cells of parsed) {
      const [serial, code, name, place, , , , , , , branch, ,] = cells;
      if (!code || !name || !engineeringBranches.has(branch)) continue;
      const key = `${code}-${branch}`;
      if (!unique.has(key)) unique.set(key, { code, name, place, branch, branchName: branch });
    }
    return [...unique.values()];
  } catch {
    return [];
  }
}

export default async function CutoffsPage() {
  const rows = await getCourses();
  return <CutoffTable initialRows={rows} source={SOURCE} />;
}
