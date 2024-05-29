import { Orientation } from "@core/rover/types";
import CompassIcon from "@assets/svg/compass.svg?react";
import { useMemo } from "react";

type Props = {
  orientation: Orientation;
};

// TODO simplify paths, animate needle rotation

/**
 * Following code comes from multiple lavorations from
 * the original Vecteezy asset through Photopea, SVGO
 * and SVGR. Still needs improvement
 */
const Compass = ({ orientation }: Props) => {
  const label = useMemo(() => {
    switch (orientation) {
      case Orientation.NORTH:
        return "N";
      case Orientation.EAST:
        return "E";
      case Orientation.SOUTH:
        return "S";
      case Orientation.WEST:
        return "W";
    }
  }, [orientation]);
  return (
    <div className="compass">
      <CompassIcon className="compass__vector" />
      <span className="compass__label">{label}</span>
    </div>
  );
};

export default Compass;
