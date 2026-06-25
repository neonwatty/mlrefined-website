"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { captureAnalyticsEvent } from "./capture";

export function PageviewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    captureAnalyticsEvent("$pageview", {
      $current_url: window.location.href,
      pathname,
      search: window.location.search,
    });
  }, [pathname]);

  return null;
}
