import React from "react";
import "./App.css";
import Counter from "./component/Counter";
import CounterHook from "./component/CounterHook";
import DataFeatch from "./component/DataFeatch";
import DataFetchById from "./component/DataFetchById";
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
      {/* <EffectHook />
      <MouseEventEffect /> */}
      <DataFeatch />
      <DataFetchById />
    </div>
  );
};

export default App;