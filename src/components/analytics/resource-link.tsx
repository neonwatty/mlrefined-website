"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { captureAnalyticsEvent, type AnalyticsProperties } from "./capture";

type ResourceLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventProperties?: AnalyticsProperties;
  children: ReactNode;
};

export function ResourceLink({
  eventName,
  eventProperties,
  children,
  onClick,
  ...props
}: ResourceLinkProps) {
  const rel = normalizeRel(props.rel, props.target);

  return (
    <a
      {...props}
      rel={rel}
      onClick={(event) => {
        captureAnalyticsEvent(eventName, withHref(eventProperties, props.href));
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

function withHref(
  eventProperties: ResourceLinkProps["eventProperties"],
  href: ResourceLinkProps["href"],
) {
  if (typeof href !== "string") return eventProperties;

  return {
    ...eventProperties,
    href,
  };
}

function normalizeRel(rel: string | undefined, target: string | undefined) {
  if (target !== "_blank") return rel;

  const tokens = new Set(rel?.split(/\s+/).filter(Boolean));
  tokens.add("noopener");
  tokens.add("noreferrer");

  return Array.from(tokens).join(" ");
}
