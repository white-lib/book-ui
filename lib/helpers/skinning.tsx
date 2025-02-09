import { extractLetters, extractNumbers } from "./strings.tsx";

export function halfTheValue(val: string | number) {
  const numbers: number = Number(extractNumbers(String(val)));
  const letters = extractLetters(String(val));

  if (numbers === undefined || letters === undefined) {
    return val;
  }

  return `${parseInt(String(numbers / 2))}${letters}`;
}

export function getCssVar(name: string): string | undefined {
  const style = getComputedStyle(document?.body);
  return style.getPropertyValue(name);
}

export function unitToPx(unit: string | number): string | number {
  if (typeof unit === "number") {
    return unit;
  }

  if (unit.includes("rem")) {
    const fontSize = getCssVar("--font-size");

    if (!fontSize) {
      return unit;
    }

    const numbers: number = Number(extractNumbers(unit));
    const fontSizeInPx = Number(extractNumbers(fontSize));
    return `${numbers * fontSizeInPx}px`;
  }

  return unit;
}
