// ─── localStorage-based persistence for question stats & session history ─────

const STORAGE_KEY = "canada-exam-stats";
const PSTAR_STORAGE_KEY = "canada-pstar-stats";
const TIMMINS_STORAGE_KEY = "canada-timmins-stats";
const TORONTO_STORAGE_KEY = "canada-toronto-stats";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface QuestionStat {
  questionId: number;
  timesViewed: number;
  timesAnswered: number;
  timesCorrect: number;
  lastAnsweredAt: string | null; // ISO date
  lastCorrect: boolean | null; // was the most recent answer correct?
}

export interface SessionAnswer {
  questionId: number;
  selectedOption: number;
  correct: boolean;
}

export interface SessionRecord {
  id: string;
  mode: "practice" | "exam" | "section";
  section?: string; // only for section mode
  startedAt: string; // ISO date
  finishedAt: string | null;
  totalQuestions: number;
  answered: number;
  correct: number;
  questionIds: number[]; // which questions were in the session
  questionAnswers?: Record<number, SessionAnswer>; // keyed by question index
}

export interface StatsData {
  questionStats: Record<number, QuestionStat>; // keyed by question id
  sessions: SessionRecord[];
}

// ─── Core generic functions ─────────────────────────────────────────────────

function getDefaultStats(): StatsData {
  return { questionStats: {}, sessions: [] };
}

export function loadStats(key: string = STORAGE_KEY): StatsData {
  if (typeof window === "undefined") return getDefaultStats();
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return getDefaultStats();
    return JSON.parse(raw) as StatsData;
  } catch {
    return getDefaultStats();
  }
}

export function saveStats(data: StatsData, key: string = STORAGE_KEY): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // quota exceeded or private browsing — silently ignore
  }
}

// ─── Generic bank-keyed operations ──────────────────────────────────────────

export function recordQuestionViewForBank(storageKey: string, questionId: number): void {
  const stats = loadStats(storageKey);
  const qs = stats.questionStats[questionId] ?? {
    questionId,
    timesViewed: 0,
    timesAnswered: 0,
    timesCorrect: 0,
    lastAnsweredAt: null,
    lastCorrect: null,
  };
  qs.timesViewed++;
  stats.questionStats[questionId] = qs;
  saveStats(stats, storageKey);
}

export function recordQuestionAnswerForBank(storageKey: string, questionId: number, correct: boolean): void {
  const stats = loadStats(storageKey);
  const qs = stats.questionStats[questionId] ?? {
    questionId,
    timesViewed: 0,
    timesAnswered: 0,
    timesCorrect: 0,
    lastAnsweredAt: null,
    lastCorrect: null,
  };
  qs.timesAnswered++;
  if (correct) qs.timesCorrect++;
  qs.lastAnsweredAt = new Date().toISOString();
  qs.lastCorrect = correct;
  stats.questionStats[questionId] = qs;
  saveStats(stats, storageKey);
}

export function startSessionForBank(
  storageKey: string,
  mode: SessionRecord["mode"],
  questionIds: number[],
  section?: string
): string {
  const stats = loadStats(storageKey);
  const prefix =
    storageKey === PSTAR_STORAGE_KEY
      ? "pstar-"
      : storageKey === TIMMINS_STORAGE_KEY
      ? "timmins-"
      : storageKey === TORONTO_STORAGE_KEY
      ? "toronto-"
      : "";
  const id = `${prefix}${mode}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  stats.sessions.push({
    id,
    mode,
    section,
    startedAt: new Date().toISOString(),
    finishedAt: null,
    totalQuestions: questionIds.length,
    answered: 0,
    correct: 0,
    questionIds,
  });
  saveStats(stats, storageKey);
  return id;
}

export function finishSessionForBank(storageKey: string, sessionId: string, answered: number, correct: number): void {
  const stats = loadStats(storageKey);
  const session = stats.sessions.find((s) => s.id === sessionId);
  if (session) {
    session.finishedAt = new Date().toISOString();
    session.answered = answered;
    session.correct = correct;
  }
  saveStats(stats, storageKey);
}

export function updateSessionAnswerForBank(
  storageKey: string,
  sessionId: string,
  questionIndex: number,
  answer: SessionAnswer
): void {
  const stats = loadStats(storageKey);
  const session = stats.sessions.find((s) => s.id === sessionId);
  if (session) {
    if (!session.questionAnswers) session.questionAnswers = {};
    session.questionAnswers[questionIndex] = answer;
    session.answered = Object.keys(session.questionAnswers).length;
    session.correct = Object.values(session.questionAnswers).filter((a) => a.correct).length;
  }
  saveStats(stats, storageKey);
}

export function getSessionForBank(storageKey: string, sessionId: string): SessionRecord | undefined {
  const stats = loadStats(storageKey);
  return stats.sessions.find((s) => s.id === sessionId);
}

export function deleteSessionForBank(storageKey: string, sessionId: string): void {
  const stats = loadStats(storageKey);
  stats.sessions = stats.sessions.filter((s) => s.id !== sessionId);
  saveStats(stats, storageKey);
}

// ─── Legacy wrappers (used by home page) ────────────────────────────────────

export function loadPstarStats(): StatsData { return loadStats(PSTAR_STORAGE_KEY); }
export function loadTimminsStats(): StatsData { return loadStats(TIMMINS_STORAGE_KEY); }
export function loadTorontoStats(): StatsData { return loadStats(TORONTO_STORAGE_KEY); }

// Legacy default-key functions (used by home page)
export function recordQuestionView(questionId: number): void { recordQuestionViewForBank(STORAGE_KEY, questionId); }
export function recordQuestionAnswer(questionId: number, correct: boolean): void { recordQuestionAnswerForBank(STORAGE_KEY, questionId, correct); }
export function startSession(mode: SessionRecord["mode"], questionIds: number[], section?: string): string { return startSessionForBank(STORAGE_KEY, mode, questionIds, section); }
export function finishSession(sessionId: string, answered: number, correct: number): void { finishSessionForBank(STORAGE_KEY, sessionId, answered, correct); }
export function updateSessionAnswer(sessionId: string, questionIndex: number, answer: SessionAnswer): void { updateSessionAnswerForBank(STORAGE_KEY, sessionId, questionIndex, answer); }
export function getSession(sessionId: string): SessionRecord | undefined { return getSessionForBank(STORAGE_KEY, sessionId); }
export function deleteSession(sessionId: string): void { deleteSessionForBank(STORAGE_KEY, sessionId); }

// Legacy PSTAR wrappers (used by home page)
export function deletePstarSession(sessionId: string): void { deleteSessionForBank(PSTAR_STORAGE_KEY, sessionId); }
export function deleteTimminsSession(sessionId: string): void { deleteSessionForBank(TIMMINS_STORAGE_KEY, sessionId); }
export function deleteTorontoSession(sessionId: string): void { deleteSessionForBank(TORONTO_STORAGE_KEY, sessionId); }

// ─── Aggregate helpers (used by the stats dashboard) ─────────────────────────

export function getAggregateStats(data: StatsData) {
  const qStats = Object.values(data.questionStats);
  const totalQuestionsViewed = qStats.filter((q) => q.timesViewed > 0).length;
  const totalQuestionsAnswered = qStats.filter((q) => q.timesAnswered > 0).length;
  const totalAnswers = qStats.reduce((s, q) => s + q.timesAnswered, 0);
  const totalCorrect = qStats.reduce((s, q) => s + q.timesCorrect, 0);
  const totalViews = qStats.reduce((s, q) => s + q.timesViewed, 0);

  const completedSessions = data.sessions.filter((s) => s.finishedAt);
  const examSessions = completedSessions.filter((s) => s.mode === "exam");
  const practiceSessions = completedSessions.filter((s) => s.mode === "practice");
  const sectionSessions = completedSessions.filter((s) => s.mode === "section");

  const examsPassed = examSessions.filter(
    (s) => s.totalQuestions > 0 && (s.correct / s.totalQuestions) * 100 >= 60
  ).length;

  return {
    totalQuestionsViewed,
    totalQuestionsAnswered,
    totalAnswers,
    totalCorrect,
    totalViews,
    overallAccuracy: totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0,
    totalSessions: data.sessions.length,
    completedSessions: completedSessions.length,
    examSessions: examSessions.length,
    practiceSessions: practiceSessions.length,
    sectionSessions: sectionSessions.length,
    examsPassed,
  };
}

/**
 * Returns question IDs sorted by weakness (worst accuracy first).
 * Includes: questions answered at least once with <100% accuracy,
 * plus never-seen questions (treated as weakest).
 */
export function getWeakQuestionIds(
  data: StatsData,
  allQuestionIds: number[],
  maxCount: number = 50
): number[] {
  const allSet = new Set(allQuestionIds);
  const scored: { id: number; score: number }[] = [];

  for (const id of allSet) {
    const qs = data.questionStats[id];
    if (!qs || qs.timesAnswered === 0) {
      scored.push({ id, score: 0 });
    } else {
      const accuracy = qs.timesCorrect / qs.timesAnswered;
      if (accuracy < 1) {
        scored.push({ id, score: accuracy });
      }
    }
  }

  scored.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    const aAttempts = data.questionStats[a.id]?.timesAnswered ?? 0;
    const bAttempts = data.questionStats[b.id]?.timesAnswered ?? 0;
    return aAttempts - bAttempts;
  });

  return scored.slice(0, maxCount).map((s) => s.id);
}

/**
 * Returns mastery stats based on the LAST answer for each question.
 */
export function getMasteryStats(
  data: StatsData,
  allQuestionIds: number[]
): { mastered: number; failed: number; unanswered: number; total: number } {
  let mastered = 0;
  let failed = 0;
  let unanswered = 0;
  for (const id of allQuestionIds) {
    const qs = data.questionStats[id];
    if (!qs || qs.lastCorrect === null || qs.lastCorrect === undefined) {
      unanswered++;
    } else if (qs.lastCorrect) {
      mastered++;
    } else {
      failed++;
    }
  }
  return { mastered, failed, unanswered, total: allQuestionIds.length };
}

export function getSectionMasteryStats(
  data: StatsData,
  sectionQuestionIds: number[]
): { mastered: number; failed: number; unanswered: number; total: number } {
  return getMasteryStats(data, sectionQuestionIds);
}

export function clearStats(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function clearPstarStats(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PSTAR_STORAGE_KEY);
}

export function clearTimminsStats(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TIMMINS_STORAGE_KEY);
}

export function clearTorontoStats(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TORONTO_STORAGE_KEY);
}
