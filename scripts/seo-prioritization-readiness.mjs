#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const outputJson = new Set(process.argv.slice(2)).has("--json");

function parseEnvFile(path) {
  if (!existsSync(path)) {
    return {};
  }

  return readFileSync(path, "utf8")
    .split(/\r?\n/)
    .reduce((env, rawLine) => {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) {
        return env;
      }

      const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
      if (!match) {
        return env;
      }

      const [, key, rawValue] = match;
      env[key] = rawValue.replace(/^['"]|['"]$/g, "");
      return env;
    }, {});
}

function loadEnv() {
  const fileEnv = {
    ...parseEnvFile(resolve(root, ".env")),
    ...parseEnvFile(resolve(root, ".env.local")),
  };

  return {
    ...fileEnv,
    ...process.env,
  };
}

function missing(env, keys) {
  return keys.filter((key) => !env[key]);
}

function main() {
  const env = loadEnv();
  const posthogMissing = missing(env, [
    "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN",
    "NEXT_PUBLIC_POSTHOG_HOST",
  ]);
  const result = {
    posthogClient: {
      status: posthogMissing.length === 0 ? "ready" : "missing",
      missing: posthogMissing,
      host: env.NEXT_PUBLIC_POSTHOG_HOST || null,
      tokenPresent: Boolean(env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN),
    },
    searchConsole: {
      status: "browser_manual",
      property: "sc-domain:mlrefined.com",
      url: "https://search.google.com/search-console?resource_id=sc-domain:mlrefined.com",
      note: "Use the authenticated browser UI for query, page, CTR, position, indexing, and sitemap evidence. No API key or service-account private key is required.",
    },
  };

  if (outputJson) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  console.log(`PostHog client: ${result.posthogClient.status}`);
  if (result.posthogClient.missing.length > 0) {
    console.log(
      `Missing PostHog variables: ${result.posthogClient.missing.join(", ")}`,
    );
  }
  console.log(
    `Search Console: ${result.searchConsole.status} (${result.searchConsole.property})`,
  );
  console.log(result.searchConsole.note);
}

main();
