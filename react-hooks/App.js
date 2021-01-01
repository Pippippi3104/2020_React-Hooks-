import React, { useReducer, createContext, useState } from "react";
import "./App.css";
import ComponentA from "./component_sec07/ComponentA";
import ComponentB from "./component_sec07/ComponentB";
import ComponentC from "./component_sec07/ComponentC";

export const CountContext = createContext()
const initialState = {
  firstCounter: 0
}
const reducer = (state, action) => {
  switch(action.type) {
      case "increment1":
          return {...state, firstCounter: state.firstCounter + action.value}
      case "decrement1":
          return {...state, firstCounter: state.firstCounter - action.value}
      case "reset":
          return initialState
      default:
          return state
  }
}

function App (){
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>カウント: {count.firstCounter}</h1>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }} >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
};

export default App;


/* import React, { createContext, useState } from "react";
import "./App.css";
import CounterReducer from "./component/CounterReducer";

function App (){
  return (
    <div className="App">
      <CounterReducer />
    </div>
  );
};

export default App; */


/* Section06 */
/* import React, { createContext, useState } from "react";
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
export const LanguageContext = createContext()

function App() {
  const [user, setUser] = useState({name: "yamada", age:"32"})
  const [language, setLanguage] = useState("日本語")

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language} >
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App; */