import React, { createContext, useState } from "react";
import "./App.css";
import ComponentC from "./component/ComponentC";
import Counter from "./component/Counter";
import CounterHook from "./component/CounterHook";
import DataFeatch from "./component/DataFeatch";
import DataFetchById from "./component/DataFetchById";
import EffectHook from "./component/EffectHook";
import FormHook from "./component/FormHook";
import ItemHook from "./component/ItemHook";
import MouseEventEffect from "./component/MouseEventEffect";

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({name: "yamada", age:"32"})

  return (
    <div className="App">
      <UserContext.Providwe value={user}>
        <ComponentC />
      </UserContext.Providwe>
    </div>
  );
};

export default App;