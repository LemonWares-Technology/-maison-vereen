const ROMAN: [number, string][] = [
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function toRoman(n: number): string {
  if (n <= 0) return "";
  let remaining = Math.floor(n);
  let out = "";
  for (const [value, numeral] of ROMAN) {
    while (remaining >= value) {
      out += numeral;
      remaining -= value;
    }
  }
  return out;
}

export function fragranceNumberLabel(sortOrder: number): string {
  return `No. ${toRoman(sortOrder)}`;
}
