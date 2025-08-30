/* Videos */
import guessjeansVideo from "@/assets/videos/guessjeans.mp4";
import hifiScan from "@/assets/videos/1hifiScan.mp4";
import hifiLb from "@/assets/videos/2hifilb.mp4";

/* Auto-import everything in /assets/images/Guess (case-sensitive) */
const gAll = import.meta.glob(
  "/src/assets/images/Guess/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    as: "url",
  }
);

const items = Object.entries(gAll)
  .map(([path, url]) => {
    const name = path.split("/").pop() || "";
    return { path, url, name, lower: name.toLowerCase() };
  })
  .sort((a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );

const pick = (fn) => items.filter(fn).map((x) => x.url);

/* Groups (match by filename keywords) */
export const personas = pick((x) => x.lower.includes("persona"));
export const research = pick((x) => x.lower.includes("research"));
export const branding = pick((x) => x.lower.includes("branding"));
export const navigation = pick((x) => x.lower.includes("navigation"));

/* Split Journey Maps vs. User Journey explicitly */
export const userJourney = pick((x) => x.lower.includes("userjourney"));
export const jm = pick(
  (x) => x.lower.includes("jm") && !x.lower.includes("userjourney")
);

export const lofi = pick((x) => x.lower.includes("lofi"));

/* Everything else (currently unused but handy for debugging/expansion) */
const used = new Set([
  ...personas,
  ...research,
  ...branding,
  ...navigation,
  ...jm,
  ...userJourney,
  ...lofi,
]);
export const other = items.filter((x) => !used.has(x.url)).map((x) => x.url);

/* Videos grouped for convenience */
export const videos = {
  hero: guessjeansVideo,
  hifiScan,
  hifiLb,
};
