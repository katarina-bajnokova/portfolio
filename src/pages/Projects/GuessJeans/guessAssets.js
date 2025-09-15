import guessjeansVideo from "@/assets/videos/guessjeans.mp4";
import hifiScan from "@/assets/videos/1hifiScan.mp4";
import hifiLb from "@/assets/videos/2hifilb.mp4";

const gAll = import.meta.glob(
  "/src/assets/images/Guess/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
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

export const personas = pick((x) => x.lower.includes("persona"));
export const research = pick((x) => x.lower.includes("research"));
export const branding = pick((x) => x.lower.includes("branding"));
export const lofi = pick((x) => x.lower.includes("lofi"));

const used = new Set([...personas, ...research, ...branding, ...lofi]);
export const other = items.filter((x) => !used.has(x.url)).map((x) => x.url);

export const videos = {
  hero: guessjeansVideo,
  hifiScan,
  hifiLb,
};
