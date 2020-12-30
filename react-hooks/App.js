import React from "react";
import "./App.css";
import Counter from "./component/Counter";
import CounterHook from "./component/CounterHook";
import FormHook from "./component/FormHook";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHook />
      <FormHook />
    </div>
  );
};

export default App;