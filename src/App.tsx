import "./App.scss";
import { generateMars } from "@core/mars";
import { Direction, Rotation } from "@core/rover/types";
import { useMarsRover } from "@hooks/useMarsRover";
import Controls from "@ui/Controls";
import Hud from "@ui/Hud";
import Display from "@ui/Display";
import Terminal from "@ui/Terminal";

const mars = generateMars(5);

function App() {
  const { rover, logs, handleMove, handleRotate } = useMarsRover(mars);

  return (
    <div className="app">
      <h1 className="app__title">Mars Rover</h1>
      <main className="app__main">
        <div className="app__mars">
          <Display mars={mars} rover={rover} />
        </div>
        <div className="app__terminal">
          <Terminal data={logs} />
        </div>
        <div className="app__hud">
          <div className="app__hud-display">
            <Hud {...rover} />
          </div>
          <div className="app__hud-controls">
            <Controls
              onPressUp={() => handleMove(Direction.FORWARD)}
              onPressRight={() => handleRotate(Rotation.RIGHT)}
              onPressDown={() => handleMove(Direction.BACKWARD)}
              onPressLeft={() => handleRotate(Rotation.LEFT)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
