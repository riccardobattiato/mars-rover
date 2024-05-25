import { Mars } from "@core/mars/types";
import { initRover, requestMovement, requestRotation } from "@core/rover";
import { directionLabels } from "@core/rover/movement";
import { rotationLabels } from "@core/rover/rotation";
import { Direction, Rotation } from "@core/rover/types";
import { Log, LogType } from "@core/types";
import { useCallback, useEffect, useState } from "react";

export const useMarsRover = (mars: Mars) => {
  const [rover, setRover] = useState(initRover(mars));
  const [logs, setLogs] = useState<Log[]>([]);

  const handleMove = useCallback(
    (direction: Direction) => {
      try {
        const newRover = requestMovement(rover, direction, mars);
        setRover(newRover);
        setLogs((prev) => [
          ...prev,
          {
            type: LogType.INFO,
            message: `Performed ${directionLabels[direction]} movement`,
          },
        ]);
      } catch (e) {
        setLogs((prev) => [...prev, { type: LogType.ERROR, message: `${e}` }]);
      }
    },
    [rover, mars]
  );

  const handleRotate = useCallback((rotation: Rotation) => {
    setRover((prev) => requestRotation(prev, rotation));
    setLogs((prev) => [
      ...prev,
      {
        type: LogType.INFO,
        message: `Performed rotation to the ${rotationLabels[rotation]}`,
      },
    ]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          handleRotate(Rotation.LEFT);
          break;
        case "ArrowUp":
          handleMove(Direction.FORWARD);
          break;
        case "ArrowRight":
          handleRotate(Rotation.RIGHT);
          break;
        case "ArrowDown":
          handleMove(Direction.BACKWARD);
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleMove, handleRotate]);

  return { rover, logs, handleMove, handleRotate };
};
