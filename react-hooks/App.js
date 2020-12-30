import React from "react";
import "./App.css";
import Counter from "./component/Counter";
import CounterHook from "./component/CounterHook";
import EffectHook from "./component/EffectHook";
import FormHook from "./component/FormHook";
import ItemHook from "./component/ItemHook";
import MouseEventEffect from "./component/MouseEventEffect";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <CounterHook />
      <FormHook />
      <ItemHook /> */}
      <EffectHook />
      <MouseEventEffect />
    </div>
  );
};

export default App;