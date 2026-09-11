import type { Category, College, Gender } from "@/lib/types";

export type Prediction = { college: College; courseCode: string; courseName: string; closingRank: number; gap: number; tier: "High chance" | "Possible" | "Reach"; score: number };

export function predict(colleges: College[], rank: number, gender: Gender, category: Category, branch = "ALL") {
  const rows: Prediction[] = [];
  for (const college of colleges) for (const course of college.courses) {
    if (branch !== "ALL" && course.code !== branch) continue;
    const closingRank = course.cutoff[category][gender];
    if (!closingRank) continue;
    const ratio = closingRank / rank;
    let tier: Prediction["tier"];
    if (rank <= closingRank * 0.75) tier = "High chance";
    else if (rank <= closingRank) tier = "Possible";
    else if (rank <= closingRank * 1.18) tier = "Reach";
    else continue;
    rows.push({ college, courseCode: course.code, courseName: course.name, closingRank, gap: closingRank - rank, tier, score: Math.max(0, Math.min(100, Math.round(50 + (ratio - 1) * 100))) });
  }
  return rows.sort((a,b) => b.score - a.score || a.closingRank - b.closingRank);
}
