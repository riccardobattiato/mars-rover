import { wrapValue } from "@utils/numbers";
import { Orientation, Rotation } from "./types";

/**
 * Applies a rotation to an Orientation
 */
export const rotate = (orientation: Orientation, rotation: Rotation) =>
  wrapValue(orientation + rotation, 4);

export const rotationLabels = {
  [Rotation.LEFT]: "left",
  [Rotation.RIGHT]: "right",
};
