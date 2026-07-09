/* Remove stale Next.js output (fixes Windows "Cannot find module './NNN.js'" dev errors). */
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", ".next");
try {
  fs.rmSync(dir, { recursive: true, force: true });
  process.stdout.write(`Removed ${dir}\n`);
} catch (e) {
  process.stderr.write(String(e) + "\n");
  process.exitCode = 0;
}
