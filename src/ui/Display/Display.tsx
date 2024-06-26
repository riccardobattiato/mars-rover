import { Mars as TMars } from "@core/mars/types";
import Obstacle from "@ui/Obstacle";
import Rover from "@ui/Rover";
import type { Rover as TRover } from "@core/rover/types";

type Props = { mars: TMars; rover: TRover };

const Display = ({ mars, rover }: Props) => (
  <div className="mars">
    <div className="mars__grid">
      {mars.map((row, y) => (
        <div className="mars__grid-row" key={`row-${y}`}>
          {row.map((cell, x) => (
            <div
              className="mars__cell"
              key={`${x}-${y}`}
              data-testid={`${x}-${y}`}
            >
              {cell && (
                <div className="mars__obstacle">
                  <Obstacle />
                </div>
              )}
              {x === rover.coords.x && y === rover.coords.y && (
                <div className="mars__rover">
                  <Rover {...rover} />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Display;
