import posthog from "posthog-js";

export type AnalyticsProperties = Record<string, string | number | boolean>;

const analyticsDebug = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "1";

export function captureAnalyticsEvent(
  eventName: string,
  eventProperties?: AnalyticsProperties,
) {
  if (typeof window === "undefined") return;

  if (analyticsDebug) {
    window.dispatchEvent(
      new CustomEvent("mlr:analytics", {
        detail: { eventName, eventProperties },
      }),
    );
  }

  posthog.capture(eventName, eventProperties);
}
