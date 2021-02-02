import React, { createContext, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CountReducer from "./components/CountReducer ";
import DataFeatch from "./components/DataFeatch";
import { DataFetchById } from "./components/DataFetchById";
import Effect from "./components/Effect";
import Form from "./components/Form";
import Item from "./components/Item";
import MouseEventEffect from "./components/MouseEventEffect";
import ComponentC from "./ContextsComponents/ComponentC";

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
    </div>
  );
}

export default App;
