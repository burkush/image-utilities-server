export function parseWidth(input: string): number {
  const width = parseFloat(input);
  if (isNaN(width) || width < 0) {
    throw new Error(`Invalid width value: ${input}`);
  }
  return width;
}
