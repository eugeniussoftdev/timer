import { Timer } from "./components/timer/Timer.component";
import { ErrorBoundary } from "./ErrorComponent.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Timer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
