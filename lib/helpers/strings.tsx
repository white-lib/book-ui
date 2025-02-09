export function extractNumbers(str: string): number | undefined {
  return str.match(/[+-]?\d+(\.\d+)?/g)?.map(function (v) {
    return parseFloat(v);
  })[0];
}

export function extractLetters(str: string): string | undefined {
  return str.match(/[a-zA-Z]/g)?.join("");
}

export function extractChars(str: string): string {
  return str.replace(/[0-9]/g, "");
}
