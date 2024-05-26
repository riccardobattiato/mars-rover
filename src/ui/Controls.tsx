import type { Rover } from "@core/rover/types";
import ArrowKey from "./ArrowKey";

type Props = {
  rover: Rover;
  onPressUp: () => void;
  onPressRight: () => void;
  onPressDown: () => void;
  onPressLeft: () => void;
};

const Controls = ({
  rover,
  onPressUp,
  onPressRight,
  onPressDown,
  onPressLeft,
}: Props) => {
  return (
    <div className="controls">
      <div className="controls__up">
        <ArrowKey type="ArrowUp" onClick={onPressUp} />
      </div>

      <div className="controls__right">
        <ArrowKey type="ArrowRight" onClick={onPressRight} />
      </div>

      <div className="controls__down">
        <ArrowKey type="ArrowDown" onClick={onPressDown} />
      </div>

      <div className="controls__left">
        <ArrowKey type="ArrowLeft" onClick={onPressLeft} />
      </div>
    </div>
  );
};

export default Controls;
