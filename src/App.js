import { useState } from "react";
import "./App.css";
import CounterButton from "./components/Counter/CounterButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <h1>DevSecOps SRE & Quality Assurance</h1>
        <div className="btns">
          <CounterButton onClick={() => setCount(count + 1)}>
            Você clicou {count} vezes
          </CounterButton>

          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
