"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { captureAnalyticsEvent, type AnalyticsProperties } from "./capture";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventProperties?: AnalyticsProperties;
};

export function TrackedLink({
  eventName,
  eventProperties,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      onClick={(event) => {
        captureAnalyticsEvent(eventName, withHref(eventProperties, href));
        onClick?.(event);
      }}
    />
  );
}

function withHref(
  eventProperties: TrackedLinkProps["eventProperties"],
  href: TrackedLinkProps["href"],
) {
  if (typeof href !== "string") return eventProperties;

  return {
    ...eventProperties,
    href,
  };
}
