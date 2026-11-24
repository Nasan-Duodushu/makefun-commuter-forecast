// Charm the Commuter: Forecast a City That Isn't — one line of weather,
// at most 140 characters, for a city that does not exist.
// Writes the forecast to /output/entry.txt.
import { mkdir, open } from "node:fs/promises";

const LINE =
  "Zorbania today: light confetti drizzle, a 90% chance your umbrella judges you, and winds that smell faintly of Tuesdays.";

const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`forecast is ${chars} chars, must be 1-140`);
}
await mkdir("/output", { recursive: true });
const handle = await open("/output/entry.txt", "w");
try {
  await handle.writeFile(LINE, "utf8");
} finally {
  await handle.close();
}
console.log(`wrote ${chars} chars to /output/entry.txt`);
