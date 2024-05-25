import { Coords } from "@core/types";

export enum Direction {
  FORWARD = 1,
  BACKWARD = -1,
}

export enum Rotation {
  RIGHT = 1,
  LEFT = -1,
}

export enum Orientation {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

export type Movement = {
  direction: Direction;
  orientation: Orientation;
};

export type Axis = "x" | "y";

export type OrientedMovement = {
  [key in Orientation]: { axis: Axis; value: 1 | -1 };
};

export type Rover = {
  coords: Coords;
  orientation: Orientation;
};
