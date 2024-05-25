import { Coords } from "@core/types";
import { Mars } from "./types";
import { randomBoolean, randomInteger } from "@utils/random";

/**
 * Generates a NxX array where "true" is an obstacle
 */
export const generateMars = (dimension: number): Mars => {
  const mars: Mars = Array.from({ length: dimension }, () =>
    Array.from({ length: dimension }, () => randomBoolean(0.4))
  );

  return mars;
};

/**
 * Given an instance of the planet, checks
 * whether the provided coordinates contain an obstacle
 * (true)
 */
export const isObstacle = (mars: Mars, coords: Coords): boolean =>
  mars[coords.y][coords.x];

export const getRandomCoords = (dimension: number): Coords => ({
  x: randomInteger(0, dimension - 1),
  y: randomInteger(0, dimension - 1),
});

export const getRandomAvailableCell = (mars: Mars): Coords => {
  const areThereEmptyCells = mars.some((row) => row.some((cell) => !cell));
  if (!areThereEmptyCells) throw new Error("Please generate an emptier planet");

  let availableCell: Coords;
  do {
    availableCell = getRandomCoords(mars.length);
  } while (isObstacle(mars, availableCell));

  return availableCell;
};
