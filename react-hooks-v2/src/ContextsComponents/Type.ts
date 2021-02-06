export type User = {
  name: string;
  age: string;
};

export type Counter = {
  firstCounter: number;
  secondCounter: number;
};

export type Counter2 = {
  firstCounter: number;
};

export type CreateCounterContext = {
  countState: Counter2;
  countDispatch: React.Dispatch<{
    type: string;
    value: number;
  }>;
};
