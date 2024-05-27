import { Mars } from "@core/mars/types";
import { Direction, Movement, Rotation, Rover } from "./types";
import { move } from "./movement";
import { getRandomAvailableCell, isObstacle } from "@core/mars";
import { rotate } from "./rotation";
import { randomInteger } from "@utils/random";

/**
 * Tries to apply a movement using the given direction
 * Throws if an obstacle is met
 */
export const requestMovement = (
  rover: Rover,
  direction: Direction,
  mars: Mars
): Rover => {
  const { coords, orientation } = rover;
  const movement: Movement = { direction, orientation };
  const destination = move(coords, movement, mars.length);

  if (isObstacle(mars, destination))
    throw new Error(`Cannot move to ${destination.x}, ${destination.y}`);

  return { ...rover, coords: destination };
};

export const requestRotation = (rover: Rover, rotation: Rotation): Rover => {
  const orientation = rotate(rover.orientation, rotation);
  return { ...rover, orientation };
};

/**
 * Inits the Rover in a random empty cell
 */
export const initRover = (mars: Mars): Rover => ({
  coords: getRandomAvailableCell(mars),
  orientation: randomInteger(0, 3),
});
