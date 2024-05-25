import { Mars } from "@core/mars/types";
import { Direction, Movement, Orientation, Rotation, Rover } from "./types";
import { move } from "./movement";
import { isObstacle } from "@core/mars";
import { simulateDelay } from "@utils/delays";
import { rotate } from "./rotation";

/**
 * Tries to apply a movement using the given direction
 * Throws if an obstacle is met
 */
export const requestMovement = async (
  rover: Rover,
  direction: Direction,
  mars: Mars
): Promise<Rover> => {
  await simulateDelay(); // we're sending commands from the Earth!

  const { coords, orientation } = rover;
  const movement: Movement = { direction, orientation };
  const destination = move(coords, movement, mars.length);

  if (isObstacle(mars, destination))
    throw new Error(`Cannote move to ${destination.x}, ${destination.y}`);

  return { ...rover, coords: destination };
};

export const requestRotation = async (
  orientation: Orientation,
  rotation: Rotation
): Promise<Orientation> => {
  await simulateDelay(); // we're sending commands from the Earth!

  return rotate(orientation, rotation);
};
