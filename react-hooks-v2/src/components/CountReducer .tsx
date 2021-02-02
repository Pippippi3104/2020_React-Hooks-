import React, { useReducer } from "react";
import { Counter } from "../ContextsComponents/Type";

const initialState: Counter = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer: (
  state: Counter,
  action: { type: string; value: number }
) => Counter = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CountReducer: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>カウント1: {count.firstCounter}</h1>
      <h1>カウント2: {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        increment1
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        decrememt1
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
        decrememt2
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        reset
      </button>
    </div>
  );
};

export default CountReducer;
