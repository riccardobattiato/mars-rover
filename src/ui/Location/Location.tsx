import { Coords } from "@core/types";
import LocationIcon from "@assets/svg/location.svg?react";

type Props = Coords;

const Location = ({ x, y }: Props) => {
  return (
    <div className="location">
      <div className="location__icon">
        <LocationIcon />
      </div>
      <div className="location__text">{`${x}, ${y}`}</div>
    </div>
  );
};

export default Location;
