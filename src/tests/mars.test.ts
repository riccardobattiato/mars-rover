import { generateMars } from "@core/mars";

describe(generateMars.name, () => {
  it.each`
    dimension | expected
    ${2}      | ${2}
    ${3}      | ${3}
    ${50}     | ${50}
  `(
    "generates from $dimension an array of $expected * $expected",
    ({ dimension, expected }) => {
      const planet = generateMars(dimension);

      // Check the number of rows
      expect(planet.length).toBe(expected);

      // Check the number of columns in each row
      planet.forEach((row) => {
        expect(row.length).toBe(expected);
      });
    }
  );

  it.each([-1, 0, 1, Math.PI])(
    "throws an error for invalid value %f",
    (dimension) => {
      expect(() => generateMars(dimension)).toThrowError();
    }
  );
});
