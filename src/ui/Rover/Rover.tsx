import { Orientation, type Rover as TRover } from "@core/rover/types";
import { clsx } from "clsx";

type Props = TRover;

const Rover = ({ orientation }: Props) => {
  return (
    <div className="rover">
      <svg
        className={clsx("rover__vector", {
          "rover__vector--right": orientation === Orientation.EAST,
          "rover__vector--bottom": orientation === Orientation.SOUTH,
          "rover__vector--left": orientation === Orientation.WEST,
        })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="325.5 261.5 53 53"
      >
        <path
          fill="none"
          d="M336 296h32M352 272v40l-8-8 8-32M328 262h8l.79.15.66.45.41.62.14.78v48l-.14.79-.41.66-.66.41-.79.14h-8l-.78-.14-.62-.41-.45-.66-.15-.79v-48l.15-.78.45-.62.62-.45.78-.15M368 262h8l.79.15.66.45.41.62.14.78v48l-.14.79-.41.66-.66.41-.79.14h-8l-.78-.14-.62-.41-.45-.66-.15-.79v-48l.15-.78.45-.62.62-.45.78-.15M352 272l8 32-8 8v-40"
        />
      </svg>
    </div>
  );
};

export default Rover;
