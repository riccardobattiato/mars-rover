export const wrapValue = (value: number, max: number) =>
  ((value % max) + max) % max;
