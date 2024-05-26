import { LogType, type Log } from "@core/types";
import WarningIcon from "@assets/svg/warning.svg?react";
import clsx from "clsx";

type Props = {
  data: Log[];
};

const Terminal = ({ data }: Props) => (
  <div className="terminal">
    {data.length === 0 ? (
      <div className="terminal__empty">
        Start by pressing &#8593;, &#8594;, &#8595; or &#8592;
      </div>
    ) : (
      data.map((log) => (
        <div
          className={clsx("terminal__log", {
            "terminal__log--error": log.type === LogType.ERROR,
          })}
          key={crypto.randomUUID()}
        >
          {log.type === LogType.ERROR && (
            <div className="terminal__log-icon">
              <WarningIcon />
            </div>
          )}
          <div className="terminal__log-message">{log.message}</div>
        </div>
      ))
    )}
  </div>
);

export default Terminal;
