import React from "react";
import "./App.css";
import Counter from "./component/Counter";
import CounterHook from "./component/CounterHook";
import FormHook from "./component/FormHook";
import ItemHook from "./component/ItemHook";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHook />
      <FormHook />
      <ItemHook />
    </div>
  );
};

export default App;