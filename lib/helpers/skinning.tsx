import { extractChars, extractNumbers } from "./strings.tsx";

export function halfTheValue(val: string | number) {
  const numbers: number = Number(extractNumbers(String(val)));
  const chars: string = extractChars(String(val));

  return `${numbers / 2}${chars}`;
}
