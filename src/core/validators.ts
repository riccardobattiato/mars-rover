import { Coords } from "./types";

export const checkValidDimension = (dimension: number) => {
  if (dimension <= 1) throw new Error("Dimension must be greater than 1");
  if (!Number.isInteger(dimension))
    throw new Error("Dimension must be an integer");

  return true;
};

export const checkValidCoords = ({ x, y }: Coords, dimension: number) => {
  if (x < 0 || y < 0)
    throw new Error("Coords must be greater than or equal to 0");

  if (!Number.isInteger(x) || !Number.isInteger(y))
    throw new Error("Coords must be integer values");

  if (x >= dimension || y >= dimension) throw new Error("Out of bounds");

  return true;
};
