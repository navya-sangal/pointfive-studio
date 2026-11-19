import type { SVGProps } from "react";

/**
 * Line icons drawn as inline SVG (from Tabler Icons, MIT licence), so they're crisp,
 * need no extra download and take the text colour around them.
 */
const paths = {
  whatsapp: [
    "M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9",
    "M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1",
  ],
  mail: ["M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z", "M3 7l9 6l9 -6"],
  instagram: [
    "M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z",
    "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
    "M16.5 7.5v.01",
  ],
  arrowRight: ["M5 12l14 0", "M13 18l6 -6", "M13 6l6 6"],
  arrowUpRight: ["M17 7l-10 10", "M8 7l9 0l0 9"],
  check: ["M5 12l5 5l10 -10"],
  plus: ["M12 5l0 14", "M5 12l14 0"],
  menu: ["M4 6l16 0", "M4 12l16 0", "M4 18l16 0"],
  close: ["M18 6l-12 12", "M6 6l12 12"],
  website: ["M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", "M4 9h16", "M7 6.5h.01", "M9.5 6.5h.01", "M8 13h5", "M8 16h8"],
  booking: [
    "M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6",
    "M16 3v4",
    "M8 3v4",
    "M4 11h16",
    "M15 19l2 2l4 -4",
  ],
  chat: [
    "M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",
    "M9.5 9h.01",
    "M14.5 9h.01",
    "M9.5 13a3.5 3.5 0 0 0 5 0",
  ],
  dashboard: [
    "M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1",
    "M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1",
    "M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1",
    "M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1",
  ],
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  ...props
}: { name: IconName; size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
