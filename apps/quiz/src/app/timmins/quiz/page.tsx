"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TimminsQuizClient from "@/components/TimminsQuizClient";
import TimminsPracticeClient from "@/components/TimminsPracticeClient";
import TimminsExamClient from "@/components/TimminsExamClient";

function TimminsQuizRouter() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "all";
  const sessionId = searchParams.get("session") ?? undefined;
  const weakParam = searchParams.get("weak");
  const weakIds = weakParam ? weakParam.split(",").map(Number).filter(Boolean) : undefined;
  const countParam = searchParams.get("count");
  const count = countParam ? Number(countParam) : undefined;

  if (mode === "practice") return <TimminsPracticeClient sessionId={sessionId} weakIds={weakIds} count={count} />;
  if (mode === "exam") return <TimminsExamClient sessionId={sessionId} />;
  return <TimminsQuizClient sessionId={sessionId} count={count} />;
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
      <TimminsQuizRouter />
    </Suspense>
  );
}
