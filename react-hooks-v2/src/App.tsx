import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import DataFeatch from "./components/DataFeatch";
import { DataFetchById } from "./components/DataFetchById";
import Effect from "./components/Effect";
import Form from "./components/Form";
import Item from "./components/Item";
import MouseEventEffect from "./components/MouseEventEffect";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Form />
      <hr />
      <Item />
      <hr />
      <Effect />
      <hr />
      <MouseEventEffect />
      <hr />
      <DataFeatch />
      <hr />
      <DataFetchById />
    </div>
  );
}

export default App;
