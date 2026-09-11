export const OFFICIAL_TGEAPCET_SOURCES = {
  homepage: "https://tgeapcet.nic.in/default.aspx",
  collegeAllotment: "https://tgeapcet.nic.in/college_allotment.aspx",
  instituteProfile: "https://tgeapcet.nic.in/institute_profile.aspx",
  finalPhase2025: "https://tgeapcet.nic.in/files/TGEAPCET_2025_FINALPHASE_LASTRANKS.pdf",
  firstPhase2025: "https://tgeapcet.nic.in/files/TGEAPCET_2025_LASTRANKS_FirstPhase.pdf",
};

/**
 * Data policy:
 * - College/branch/cutoff information is sourced from official TGEAPCET material.
 * - Historical cutoff values are not guarantees of future allotment.
 * - The candidate allotment pages are session/security protected by TGEAPCET,
 *   so this project must not scrape or redistribute private candidate records.
 * - Use aggregate college/branch/category/rank information rather than names,
 *   hall-ticket numbers, phone numbers, or other candidate identifiers.
 */
export const DATA_NOTES = {
  cutoffYear: 2025,
  cutoffPhase: "Final Phase",
  candidatePii: "not collected",
  sourceAuthority: "TGEAPCET / Telangana Council of Higher Education / DTE Hyderabad",
};
