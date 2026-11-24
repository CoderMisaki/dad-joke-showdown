// Dad Joke Showdown — entry program.
//
// One joke, one file, one write. The joke below is the entire entry:
// a father answering his son's question about the oldest gag in the
// book, deadpan, the way it would actually sound at the dinner table.
//
// The program keeps the text honest before it ships it: the sealed
// scorer only accepts UTF-8 text of 1 to 200 characters, so we refuse
// to write anything outside that window instead of failing silently.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry itself — a single dad joke, told in the father's own voice.
const dadJoke =
  "My son asked why I always say 'Hi hungry, I'm Dad.' I told him it's not a joke, it's a lifestyle.";

function deliverJoke(joke: string): void {
  if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
    throw new Error(`Joke must be 1-200 non-blank characters, got ${joke.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", joke, "utf8");
}

deliverJoke(dadJoke);
console.log(`Wrote ${dadJoke.length} characters to /output/entry.txt`);
