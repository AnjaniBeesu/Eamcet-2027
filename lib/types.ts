export type Gender = "boys" | "girls";
export type Category = "OC" | "BC_A" | "BC_B" | "BC_C" | "BC_D" | "BC_E" | "SC_I" | "SC_II" | "SC_III" | "ST" | "EWS";
export type Cutoff = Record<Category, { boys: number | null; girls: number | null }>;
export type Course = { code: string; name: string; cutoff: Cutoff };
export type College = { code: string; name: string; place: string; district: string; type: "PVT" | "UNIV"; affiliatedTo: string; courses: Course[]; featured?: boolean };
