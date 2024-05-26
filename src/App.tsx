import "./App.scss";
import { generateMars } from "@core/mars";
import { useMarsRover } from "@hooks/useMarsRover";

const mars = generateMars(5);

function App() {
  const { rover, logs, handleMove, handleRotate } = useMarsRover(mars);

  return (
    <div className="container" data-testid="ciao">
      <div className="mars">
        {mars.map((row, y) => (
          <div className="mars__row" key={`row-${y}`}>
            {row.map((cell, x) => (
              <div className="mars__cell" key={`cell-${x}`}>
                {`${x}, ${y}`}
                {cell && <div className="mars__obstacle">obs</div>}
                {rover.coords.x === x && rover.coords.y === y && (
                  <div className="rover">rvr</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <div className="controls__orientation">
          Orientation: {rover.orientation}
        </div>
        <div className="controls__coords">
          Coordinates: {rover.coords.x} {rover.coords.y}
        </div>
        {logs.map((log, i) => (
          <div key={`log-${i}`}>{log.message}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
