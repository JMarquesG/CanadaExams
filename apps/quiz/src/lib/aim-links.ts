const AIM_PDF_MAP: Record<string, { url: string; label: string }> = {
  GEN: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_gen_en.pdf", label: "GEN — General" },
  AGA: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_aga_en.pdf", label: "AGA — Aerodromes" },
  COM: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_com_en.pdf", label: "COM — Communications" },
  MET: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_met_en.pdf", label: "MET — Meteorology" },
  RAC: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_rac_en.pdf", label: "RAC — Rules of the Air" },
  SAR: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_sar_en.pdf", label: "SAR — Search & Rescue" },
  MAP: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_map_en.pdf", label: "MAP — Charts & Pubs" },
  LRA: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_lra_en.pdf", label: "LRA — Licensing" },
  AIR: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_air_en.pdf", label: "AIR — Airmanship" },
  NAT: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_nat_en.pdf", label: "NAT — North Atlantic" },
  RPA: { url: "https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_rpa_en.pdf", label: "RPA — RPAS" },
};

const AIM_FULL_PDF = "https://tc.canada.ca/en/aviation/publications/transport-canada-aeronautical-information-manual-tc-aim-tp-14371";

/**
 * Given a reference string like "AIM RAC 4.3.2" or "CAR 602.19",
 * returns the URL to the relevant TC AIM chapter PDF (or the full AIM if CAR-based).
 */
export function getAimPdfUrl(reference: string | undefined): { url: string; label: string } | null {
  if (!reference) return null;

  // Try to match "AIM XXX" pattern
  const aimMatch = reference.match(/AIM\s+([A-Z]{3})/i);
  if (aimMatch) {
    const chapter = aimMatch[1].toUpperCase();
    return AIM_PDF_MAP[chapter] ?? { url: AIM_FULL_PDF, label: "TC AIM (Full)" };
  }

  // For CAR references, link to the full AIM
  if (reference.match(/^CAR\s/i)) {
    return { url: AIM_FULL_PDF, label: "TC AIM (Full)" };
  }

  // For CTAISB references
  if (reference.match(/CTAISB/i)) {
    return { url: AIM_FULL_PDF, label: "TC AIM (Full)" };
  }

  return null;
}
