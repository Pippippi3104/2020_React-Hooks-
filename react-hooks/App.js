import React from "react";
import "./App.css";
import Counter from "./component/Counter";
import CounterHook from "./component/CounterHook";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHook />
    </div>
  );
};

export default App;