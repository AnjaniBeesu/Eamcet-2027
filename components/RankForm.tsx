"use client";

import { PredictorForm } from "./PredictorForm";

/**
 * Backwards-compatible name used by the homepage.
 * The actual predictor UI lives in PredictorForm.
 */
export function RankForm() {
  return <PredictorForm />;
}
