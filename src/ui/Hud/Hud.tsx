import { Rover } from "@core/rover/types";
import Compass from "@ui/Compass";
import Location from "@ui/Location";

type Props = Rover;

const Hud = ({ coords, orientation }: Props) => {
  return (
    <div className="hud">
      <div className="hud__compass">
        <Compass orientation={orientation} />
      </div>
      <div className="hud__location">
        <Location {...coords} />
      </div>
    </div>
  );
};

export default Hud;
