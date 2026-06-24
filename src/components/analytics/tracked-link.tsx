"use client";

import Link from "next/link";
import posthog from "posthog-js";
import type { ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventProperties?: Record<string, string | number | boolean>;
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
        posthog.capture(eventName, withHref(eventProperties, href));
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
