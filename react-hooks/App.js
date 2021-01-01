import React, { createContext, useState } from "react";
import "./App.css";
import CounterReducer from "./component/CounterReducer";

function App (){
  return (
    <div className="App">
      <CounterReducer />
    </div>
  );
};

export default App;



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