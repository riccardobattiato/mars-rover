import { Coords } from "@core/types";
import { Mars } from "./types";
import { randomBoolean } from "@utils/random";

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
