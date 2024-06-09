export function extractNumbers(str: string): string {
  return str.replace(/\D/g, "");
}

export function extractChars(str: string): string {
  return str.replace(/[0-9]/g, "");
}
