import "./App.scss";
import { generateMars } from "@core/mars";
import { useMarsRover } from "@hooks/useMarsRover";
import Obstacle from "@ui/Obstacle";
import Rover from "@ui/Rover";

const mars = generateMars(5);

function App() {
  const { rover, logs, handleMove, handleRotate } = useMarsRover(mars);

  return (
    <div className="app">
      <h1 className="app__title">Mars Rover</h1>
      <main className="app__main">
        <div className="app__mars">Mars</div>
        <div className="app__terminal">Terminal</div>
        <div className="app__controls">Controls</div>
      </main>
    </div>
  );
}

export default App;
