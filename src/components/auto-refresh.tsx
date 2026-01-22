"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AutoRefresh({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const ws = new WebSocket("ws://localhost:3201");
    ws.onmessage = (event) => {
      if (event.data === "refresh") {
        router.refresh();
      }
    };
    return () => {
      ws.close();
    };
  }, [router]);

  return children;
}

export default AutoRefresh;
