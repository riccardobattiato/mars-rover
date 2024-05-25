import { Coords } from "@core/types";
import { OrientedMovement, Orientation, Movement } from "./types";
import { wrapValue } from "@utils/numbers";

// For every Orientation, maps absolute contributions to the rover's coordinates
const Movements: OrientedMovement = {
  [Orientation.NORTH]: {
    axis: "y",
    value: -1,
  },
  [Orientation.EAST]: {
    axis: "x",
    value: 1,
  },
  [Orientation.SOUTH]: {
    axis: "y",
    value: 1,
  },
  [Orientation.WEST]: {
    axis: "x",
    value: -1,
  },
};

/**
 * Applies a single movement to a pair of (x, y) coordinates
 * The function is absolute to the eventual obstacles
 * It does however wrap to the provided dimension
 */
export const move = (
  coords: Coords,
  movement: Movement,
  dimension: number
): Coords => {
  // 1. We want to know axis and sign of our movement
  const { axis, value } = Movements[movement.orientation];

  // 2. Add the (+1 | -1) to the appropriate coordinate
  const newValue = coords[axis] + movement.direction * value;

  // 3. Wrap to provided dimension
  return { ...coords, [axis]: wrapValue(newValue, dimension) };
};
