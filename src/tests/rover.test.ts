import { move } from "@core/rover/movement";
import { rotate } from "@core/rover/rotation";
import { Direction, Orientation, Rotation } from "@core/rover/types";

describe(move.name, () => {
  const movement = {
    orientation: Orientation.EAST,
    direction: Direction.FORWARD,
  };
  it("throws an error if dimension is not valid", () => {
    const coords = { x: 4, y: 3 };
    const invalidDimension = Math.PI;

    expect(() => move(coords, movement, invalidDimension)).toThrowError();
  });

  it("throws an out of bounds error", () => {
    const coords = { x: 4, y: 3 };
    const dimension = 2;

    expect(() => move(coords, movement, dimension)).toThrowError(
      "Out of bounds"
    );
  });

  it("returns coordinates after movement", () => {
    const coords = { x: 4, y: 3 };
    const dimension = 10;

    const newCoords = move(coords, movement, dimension);

    expect(newCoords).toEqual({ x: 5, y: 3 });
  });

  it("wraps to maximum dimension", () => {
    const coords = { x: 4, y: 3 };
    const dimension = 5;

    const newCoords = move(coords, movement, dimension);

    expect(newCoords).toEqual({ x: 0, y: 3 });
  });
});

describe(rotate.name, () => {
  it("performs a complete 360° rotation to the right", () => {
    let orientation = Orientation.SOUTH;

    orientation = rotate(orientation, Rotation.RIGHT);
    expect(orientation).toBe(Orientation.WEST);

    orientation = rotate(orientation, Rotation.RIGHT);
    expect(orientation).toBe(Orientation.NORTH);

    orientation = rotate(orientation, Rotation.RIGHT);
    expect(orientation).toBe(Orientation.EAST);

    orientation = rotate(orientation, Rotation.RIGHT);
    expect(orientation).toBe(Orientation.SOUTH);
  });
});
