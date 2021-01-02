/* Section11 */
import React from "react";
import "./App.css";
import Form from "./component_sec09-10-11/Form";

function App() {
  return (
    <div className="App">
      <h1>Custom Hook</h1>
       <Form />
    </div>
  );
};

export default App;


/* Section11 */
/* import React from "react";
import "./App.css";
import DocTitleUpdateOne from "./component_sec09-10-11/DocTitleUpdateOne";
import DocTitleUpdateTwo from "./component_sec09-10-11/DocTitleUpdateTwo";

function App() {
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <DocTitleUpdateOne />
      <DocTitleUpdateTwo />
    </div>
  );
};

export default App; */


/* Section10 */
/* import React from "react";
import "./App.css";
import Count from "./component_sec09/Count";
import FocusInput from "./component_sec09/FocusInput";

function App() {
  return (
    <div className="App">
      <h1>useRef</h1>
      <FocusInput />
      <Count />
    </div>
  );
};

export default App; */


/* Section09 */
/* import React from "react";
import "./App.css";
import Check from "./component_sec09/Check";

function App() {
  return (
    <div className="App">
      <Check />
    </div>
  );
};

export default App; */


/* Section08 */
/* import React from "react";
import "./App.css";
import WrapComponent from "./component_sec08/WrapComponent"

function App() {
  return (
    <div className="App">
      <WrapComponent />
    </div>
  );
};

export default App; */


/* Section07 */
/* import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
}

const reducer = (state, action) => {
  switch(action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: ""
      }
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "データの取得に失敗しました。"
      }
    default:
      return state
  }
}

function App (){
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        dispatch({type: "FETCH_SUCCESS", payload: res.data})
      })
      .catch(err => {
        dispatch({type: "FETCH_ERROR"})
      })
  })

  return (
    <div className="App">
      <h1>{state.loading ? "Loading..." : state.post.title}</h1>
      <h2>{state.error ? state.error : null}</h2>
    </div>
  );
};

export default App; */


/* Section07 */
/* import React, { useReducer, createContext, useState } from "react";
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

export default App; */


/* Section07 */
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