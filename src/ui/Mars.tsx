import { Mars as TMars } from "@core/mars/types";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  cells: TMars;
}>;

const Mars = ({ children, cells }: Props) => {
  return <div className="mars">Mars</div>;
};

export default Mars;
