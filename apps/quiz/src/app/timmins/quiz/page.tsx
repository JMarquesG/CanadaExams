"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import UnifiedPracticeClient from "@/components/UnifiedPracticeClient";
import UnifiedExamClient from "@/components/UnifiedExamClient";
import { getBankConfig } from "@/lib/bankConfig";

const bank = getBankConfig("timmins");

function QuizRouter() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "all";
  const sessionId = searchParams.get("session") ?? undefined;
  const weakParam = searchParams.get("weak");
  const weakIds = weakParam ? weakParam.split(",").map(Number).filter(Boolean) : undefined;
  const countParam = searchParams.get("count");
  const count = countParam ? Number(countParam) : undefined;
  const section = searchParams.get("section") ?? undefined;

  if (mode === "exam") return <UnifiedExamClient bank={bank} sessionId={sessionId} />;
  return <UnifiedPracticeClient bank={bank} sessionId={sessionId} weakIds={weakIds} count={count} section={section} />;
}

export default function TimminsQuizPage() {
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
