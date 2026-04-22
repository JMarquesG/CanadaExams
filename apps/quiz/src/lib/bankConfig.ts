import { questions, SECTIONS, Question } from "@/data/questions";
import { pstarQuestions, PSTAR_SECTIONS, PstarQuestion } from "@/data/pstar-questions";
import { timminsQuestions, TIMMINS_SECTIONS, TimminsQuestion } from "@/data/timmins-questions";
import { torontoQuestions, TORONTO_SECTIONS, TorontoQuestion } from "@/data/toronto-questions";
import { ganderQuestions, GANDER_SECTIONS, GanderQuestion } from "@/data/gander-questions";

// ─── Unified question type ──────────────────────────────────────────────────

export type AnyQuestion = {
  id: number;
  section: string;
  question: string;
  options: { id: number; text: string }[];
  correctAnswer: number;
  explanation?: string;
  aimReference?: string;
  reference?: string;
  images?: { src: string; alt: string }[];
};

// ─── Bank configuration ─────────────────────────────────────────────────────

export type BankKey = "license" | "pstar" | "timmins" | "toronto" | "gander";

export interface BankConfig {
  key: BankKey;
  label: string;
  storageKey: string;
  questions: AnyQuestion[];
  sections: string[];
  examSize: number;
  passPercent: number;
  homeHref: string;
  quizBase: string;
  colors: {
    primary: string;       // bg-emerald-800, bg-indigo-900, bg-teal-800
    primaryDark: string;   // bg-emerald-900, bg-indigo-950, bg-teal-900
    primaryLight: string;  // text-emerald-300, text-indigo-300, text-teal-300
    primaryMuted: string;  // text-emerald-200, text-indigo-200, text-teal-200
    primarySep: string;    // text-emerald-500, text-indigo-500, text-teal-500
    accent: string;        // bg-emerald-700, bg-indigo-700, bg-teal-700
    accentHover: string;   // bg-emerald-800, bg-indigo-800, bg-teal-800
    accentBar: string;     // bg-emerald-400, bg-indigo-400, bg-teal-400
    badge: string;         // text-emerald-700 bg-emerald-100, etc.
    currentQ: string;      // bg-emerald-700, bg-indigo-700, bg-teal-700
    currentQRing: string;  // ring-emerald-300, ring-indigo-300, ring-teal-300
  };
  buildExam: () => AnyQuestion[];
  pdfs?: { label: string; href: string }[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const BANK_CONFIGS: Record<BankKey, BankConfig> = {
  license: {
    key: "license",
    label: "TC Exam",
    storageKey: "canada-exam-stats",
    questions: questions as AnyQuestion[],
    sections: SECTIONS as string[],
    examSize: 100,
    passPercent: 60,
    homeHref: "/?bank=license",
    quizBase: "/helicopter/quiz",
    colors: {
      primary: "bg-emerald-800",
      primaryDark: "bg-emerald-900",
      primaryLight: "text-emerald-300",
      primaryMuted: "text-emerald-200",
      primarySep: "text-emerald-500",
      accent: "bg-emerald-700",
      accentHover: "hover:bg-emerald-800",
      accentBar: "bg-emerald-400",
      badge: "text-emerald-700 bg-emerald-100",
      currentQ: "bg-emerald-700",
      currentQRing: "ring-emerald-300",
    },
    buildExam: () => shuffleArray([...questions] as AnyQuestion[]),
    pdfs: [
      { label: "Open TC AIM PDF", href: "/pdfs/aim-2025-2_access_en.pdf" },
      { label: "Open Exam PDF", href: "/pdfs/examcanada.pdf" },
    ],
  },
  pstar: {
    key: "pstar",
    label: "PSTAR",
    storageKey: "canada-pstar-stats",
    questions: pstarQuestions as AnyQuestion[],
    sections: PSTAR_SECTIONS as string[],
    examSize: 50,
    passPercent: 90,
    homeHref: "/?bank=pstar",
    quizBase: "/pstar/quiz",
    colors: {
      primary: "bg-indigo-900",
      primaryDark: "bg-indigo-950",
      primaryLight: "text-indigo-300",
      primaryMuted: "text-indigo-200",
      primarySep: "text-indigo-500",
      accent: "bg-indigo-700",
      accentHover: "hover:bg-indigo-800",
      accentBar: "bg-indigo-400",
      badge: "text-indigo-700 bg-indigo-100",
      currentQ: "bg-indigo-700",
      currentQRing: "ring-indigo-300",
    },
    buildExam: () => {
      const total = pstarQuestions.length;
      const examSize = 50;
      const picked = (PSTAR_SECTIONS as string[]).flatMap((section) => {
        const pool = pstarQuestions.filter((q) => q.section === section);
        const count = Math.max(1, Math.round((pool.length / total) * examSize));
        return shuffleArray(pool).slice(0, count);
      });
      return shuffleArray(picked as AnyQuestion[]).slice(0, examSize);
    },
    pdfs: [
      { label: "Open TC AIM PDF", href: "/pdfs/aim-2025-2_access_en.pdf" },
    ],
  },
  timmins: {
    key: "timmins",
    label: "Timmins Exam",
    storageKey: "canada-timmins-stats",
    questions: timminsQuestions as AnyQuestion[],
    sections: TIMMINS_SECTIONS as string[],
    examSize: 100,
    passPercent: 70,
    homeHref: "/?bank=timmins",
    quizBase: "/timmins/quiz",
    colors: {
      primary: "bg-teal-800",
      primaryDark: "bg-teal-900",
      primaryLight: "text-teal-300",
      primaryMuted: "text-teal-200",
      primarySep: "text-teal-500",
      accent: "bg-teal-700",
      accentHover: "hover:bg-teal-800",
      accentBar: "bg-teal-400",
      badge: "text-teal-700 bg-teal-100",
      currentQ: "bg-teal-700",
      currentQRing: "ring-teal-300",
    },
    buildExam: () => shuffleArray([...timminsQuestions] as AnyQuestion[]).slice(0, 100),
    pdfs: [],
  },
  toronto: {
    key: "toronto",
    label: "Toronto Exam",
    storageKey: "canada-toronto-stats",
    questions: torontoQuestions as AnyQuestion[],
    sections: TORONTO_SECTIONS as unknown as string[],
    examSize: 100,
    passPercent: 70,
    homeHref: "/?bank=toronto",
    quizBase: "/toronto/quiz",
    colors: {
      primary: "bg-rose-800",
      primaryDark: "bg-rose-900",
      primaryLight: "text-rose-300",
      primaryMuted: "text-rose-200",
      primarySep: "text-rose-500",
      accent: "bg-rose-700",
      accentHover: "hover:bg-rose-800",
      accentBar: "bg-rose-400",
      badge: "text-rose-700 bg-rose-100",
      currentQ: "bg-rose-700",
      currentQRing: "ring-rose-300",
    },
    buildExam: () => shuffleArray([...torontoQuestions] as AnyQuestion[]).slice(0, 100),
    pdfs: [],
  },
  gander: {
    key: "gander",
    label: "Gander Exam",
    storageKey: "canada-gander-stats",
    questions: ganderQuestions as AnyQuestion[],
    sections: GANDER_SECTIONS as unknown as string[],
    examSize: 100,
    passPercent: 70,
    homeHref: "/?bank=gander",
    quizBase: "/gander/quiz",
    colors: {
      primary: "bg-orange-800",
      primaryDark: "bg-orange-900",
      primaryLight: "text-orange-300",
      primaryMuted: "text-orange-200",
      primarySep: "text-orange-500",
      accent: "bg-orange-700",
      accentHover: "hover:bg-orange-800",
      accentBar: "bg-orange-400",
      badge: "text-orange-700 bg-orange-100",
      currentQ: "bg-orange-700",
      currentQRing: "ring-orange-300",
    },
    buildExam: () => shuffleArray([...ganderQuestions] as AnyQuestion[]).slice(0, 100),
    pdfs: [],
  },
};

export function getBankConfig(key: BankKey): BankConfig {
  return BANK_CONFIGS[key];
}
