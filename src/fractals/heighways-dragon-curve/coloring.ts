import type {HeighwaysDragonColoringRule} from "./types.ts";

// Cappuccino Mocha https://catppuccin.com/
export const defaultHeighwaysDragonColoringRules: HeighwaysDragonColoringRule = {
    rules: {
        0: "#f5e0dc", // Rosewater
        30: "#f2cdcd", // Flamingo
        50: "#f5c2e7", // Pink
        80: "#cba6f7", // Mauve
        100: "#f38ba8", // Red
        120: "#eba0ac", // Maroon
        140: "#fab387", // Peach
        200: "#f9e2af", // Yellow
        210: "#a6e3a1", // Green
        230: "#94e2d5", // Teal
        250: "#89dceb", // Sky
        280: "#74c7ec", // Sapphire
        300: "#89b4fa", // Blue
        320: "#b4befe", // Lavender
    },
    lastRuleIndex: 320,
    lastRuleOffset: 30
};

export function getBreakpointColor(index: number, rule: HeighwaysDragonColoringRule, defaultColor: string = "#fff"): string {
    // loop
    const idx = index % (rule.lastRuleIndex + rule.lastRuleOffset);

    const breakpoints = Object.keys(rule.rules)
        .map(Number)
        .filter(n => n <= idx)
        .sort((a, b) => b - a);

    const nearest = breakpoints[0];
    return nearest !== undefined ? rule.rules[nearest] : defaultColor;
}