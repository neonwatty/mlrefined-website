"use client";

import posthog from "posthog-js";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ResourceLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventProperties?: Record<string, string | number | boolean>;
  children: ReactNode;
};

export function ResourceLink({
  eventName,
  eventProperties,
  children,
  onClick,
  ...props
}: ResourceLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        posthog.capture(eventName, eventProperties);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
