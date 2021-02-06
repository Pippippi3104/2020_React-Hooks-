import { Counter2 } from "../ContextsComponents/Type";

export const initialState2: Counter2 = {
  firstCounter: 0,
};

export const reducer: (
  state: Counter2,
  action: { type: string; value: number }
) => Counter2 = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState2;
    default:
      return state;
  }
};
