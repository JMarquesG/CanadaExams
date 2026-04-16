"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import QuizClient from "@/components/QuizClient";
import PracticeClient from "@/components/PracticeClient";
import ExamClient from "@/components/ExamClient";

function QuizRouter() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "all";
  const sessionId = searchParams.get("session") ?? undefined;
  const weakParam = searchParams.get("weak");
  const weakIds = weakParam ? weakParam.split(",").map(Number).filter(Boolean) : undefined;
  const countParam = searchParams.get("count");
  const count = countParam ? Number(countParam) : undefined;

  if (mode === "practice") return <PracticeClient sessionId={sessionId} weakIds={weakIds} count={count} />;
  if (mode === "exam") return <ExamClient sessionId={sessionId} />;
  return <QuizClient sessionId={sessionId} count={count} />;
}

export default function HelicopterQuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
          Loading…
        </div>
      }
    >
      <QuizRouter />
    </Suspense>
  );
}
