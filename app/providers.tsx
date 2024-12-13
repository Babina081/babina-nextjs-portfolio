"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "";

    posthog.init(posthogKey, {
      api_host: posthogHost,
      person_profiles: "always",
      capture_pageview: true,
      autocapture: true,
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
