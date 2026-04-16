"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PstarHomePage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?bank=pstar");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-gray-400 text-sm">Redirecting...</div>
    </div>
  );
}
