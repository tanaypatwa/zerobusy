import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { existsSync } from "node:fs";

import { homepageClients } from "../src/app/homepageClients.ts";

test("homepage clients include the Khatwani Group logo asset", () => {
  const khatwaniClient = homepageClients.find(
    (client) => client.alt === "Khatwani Group",
  );
  const khatwaniIndex = homepageClients.findIndex(
    (client) => client.alt === "Khatwani Group",
  );

  assert.ok(khatwaniClient, "Expected Khatwani Group to appear in the homepage carousel");
  assert.equal(khatwaniIndex, 3, "Expected Khatwani Group to appear 4th in the carousel");
  assert.equal(khatwaniClient.href, "https://khatwanigroup.in/");
  assert.equal(khatwaniClient.src, "/clients/khatwani-group.png");

  const assetPath = path.join(process.cwd(), "public", khatwaniClient.src.slice(1));
  assert.ok(existsSync(assetPath), `Expected asset to exist at ${assetPath}`);
});
