/**
 * The higher the density, the higher the "true" values
 */
export const randomBoolean = (density = 0.5) => Math.random() < density;

export const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
