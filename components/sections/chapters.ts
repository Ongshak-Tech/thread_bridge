export type Chapter = {
  start: number;
  end: number;
  /** Full title, used by the chapter list. */
  title: string;
  /** Two-word label, used by the hero's pill selector. */
  short: string;
  desc: string;
};

// Kept in sync with public/video/chapters.vtt.
export const chapters: Chapter[] = [
  {
    start: 0,
    end: 18,
    title: "Inside the factory today",
    short: "Factory today",
    desc: "Rolls come off the line and head straight to a manual inspection table.",
  },
  {
    start: 18,
    end: 30,
    title: "The limits of manual inspection",
    short: "Manual limits",
    desc: "12–20 m/min on average, and accuracy drops as inspectors tire.",
  },
  {
    start: 30,
    end: 41,
    title: "Automated inline scanning",
    short: "Inline scanning",
    desc: "A camera bar reads the full width of the fabric at 50 m/min.",
  },
  {
    start: 41,
    end: 51,
    title: "Detecting and classifying defects",
    short: "Defect tagging",
    desc: "Spinning, knitting, dyeing, finishing and cleanliness faults, tagged at 98.4% accuracy.",
  },
  {
    start: 51,
    end: 62,
    title: "The live floor dashboard",
    short: "Dashboard",
    desc: "Every flagged defect lands on a map of the roll, at the machine.",
  },
  {
    start: 62,
    end: 81,
    title: "What's coming next",
    short: "What's next",
    desc: "Where threadBridge is heading beyond the pilot program.",
  },
];

export function chapterIndexAt(time: number) {
  return chapters.findIndex((c) => time >= c.start && time < c.end);
}

export function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
