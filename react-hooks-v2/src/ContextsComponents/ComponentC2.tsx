import React from "react";
import { CreateCounterContext } from "./Type";

export function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}
export const [
  useCountContext,
  SetCountContextProvider,
] = createCtx<CreateCounterContext>();

const ComponentC2: React.FC = () => {
  const countContext = useCountContext();
  return (
    <div>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment1", value: 1 })
        }
      >
        increment1
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement1", value: 1 })
        }
      >
        decrememt1
      </button>
      <button
        onClick={() => countContext.countDispatch({ type: "reset", value: 0 })}
      >
        reset
      </button>
    </div>
  );
};

export default ComponentC2;
