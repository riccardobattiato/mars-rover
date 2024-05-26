import ArrowUp from "@assets/images/up.png";
import ArrowUpPressed from "@assets/images/up_pressed.png";

import ArrowRight from "@assets/images/right.png";
import ArrowRightPressed from "@assets/images/right_pressed.png";

import ArrowDown from "@assets/images/down.png";
import ArrowDownPressed from "@assets/images/down_pressed.png";

import ArrowLeft from "@assets/images/left.png";
import ArrowLeftPressed from "@assets/images/left_pressed.png";
import { useEffect, useMemo, useState } from "react";

type Props = {
  type: "ArrowUp" | "ArrowRight" | "ArrowDown" | "ArrowLeft";
  onClick: () => void;
};

const ArrowKey = ({ type, onClick }: Props) => {
  const [pressed, setPressed] = useState(false);
  const url = useMemo(() => {
    switch (type) {
      case "ArrowUp":
        return !pressed ? ArrowUp : ArrowUpPressed;

      case "ArrowRight":
        return !pressed ? ArrowRight : ArrowRightPressed;

      case "ArrowDown":
        return !pressed ? ArrowDown : ArrowDownPressed;

      case "ArrowLeft":
        return !pressed ? ArrowLeft : ArrowLeftPressed;
    }
  }, [type, pressed]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === type) {
        setPressed(true);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === type) {
        setPressed(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [type]);

  return (
    <button
      className="arrow-key"
      onPointerDown={() => setPressed(true)}
      onPointerCancel={() => {
        setPressed(false);
      }}
      onPointerUp={() => {
        onClick();
        setPressed(false);
      }}
    >
      <img src={url} alt={type} className="arrow-key__image" />
    </button>
  );
};

export default ArrowKey;
