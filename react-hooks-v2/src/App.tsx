import React, { createContext, useReducer, useState } from "react";
import "./App.css";

// Components
import Counter from "./components/Counter";
import { reducer, initialState2 } from "./components/CounterReducer2";
import CountReducer from "./components/CountReducer ";
import DataFeatch from "./components/DataFeatch";
import { DataFetchById } from "./components/DataFetchById";
import Effect from "./components/Effect";
import Form from "./components/Form";
import Item from "./components/Item";
import MouseEventEffect from "./components/MouseEventEffect";
import ComponentA, {
  SetCountContextProvider,
} from "./ContextsComponents/ComponentA";
import ComponentB from "./ContextsComponents/ComponentB";
import ComponentC from "./ContextsComponents/ComponentC";
import ComponentC2 from "./ContextsComponents/ComponentC2";

// type
import { User } from "./ContextsComponents/Type";

// Contexts
const initialState: User = {
  name: "",
  age: "",
};
export const UserContext = createContext<User>(initialState);
export const LanguageContext = createContext<string>("");

function App() {
  const [user, setUser] = useState({ name: "yamada", age: "32" });
  const [language, setLanguage] = useState("日本語");

  const [count2, dispatch] = useReducer(reducer, initialState2);

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
      <hr />
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
      <hr />
      <CountReducer />
      <hr />
      <h1>カウント: {count2}</h1>
      <SetCountContextProvider
        value={{ countState: count2, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC2 />
      </SetCountContextProvider>
      <hr />
    </div>
  );
}

export default App;
