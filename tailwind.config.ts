import type { Config } from "tailwindcss";
export default { content: ["./src/**/*.{ts,tsx}"], theme: { extend: {
 colors:{ night:"#080711", dusk:"#100D1C", plum:"#211735", gold:"#D4AF6A", lgold:"#E8D29A", cream:"#F8F2E8", muted:"#B8B1C2" },
 fontFamily:{ serif:["var(--font-serif)","serif"], sans:["var(--font-sans)","sans-serif"] } } }, plugins: [] } satisfies Config;
