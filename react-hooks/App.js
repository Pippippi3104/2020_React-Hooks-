import React from "react";
import "./App.css";
import Counter from "./component/Counter";
import CounterHook from "./component/CounterHook";
import EffectHook from "./component/EffectHook";
import FormHook from "./component/FormHook";
import ItemHook from "./component/ItemHook";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <CounterHook />
      <FormHook />
      <ItemHook /> */}
      <EffectHook />
    </div>
  );
};

export default App;