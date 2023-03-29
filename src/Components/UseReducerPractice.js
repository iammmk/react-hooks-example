import React, { useReducer } from "react";
const initialState = {
  value: 0,
  cake: 0,
};
const valueReducer = (state, action) => {
  if (action.type === "increase") {
    return state + 1;
  } else if (action.type === "decrease") {
    return state - 1;
  } else {
    return state;
  }
};
const cakeReducer = (state, action) => {
  if (action.type === "buy") {
    return state + 1;
  } else if (action.type === "sell") {
    return state - 1;
  } else {
    return state;
  }
};

const UseReducerPractice = () => {
  const [value, dispatchValue] = useReducer(valueReducer, initialState.value);
  const [cake, dispatchCake] = useReducer(cakeReducer, initialState.cake);
  return (
    <>
      <h3>Value shop</h3>
      <button onClick={() => dispatchValue({ type: "increase" })}>
        increase
      </button>
      <br />
      <h3>Current value: {value}</h3>
      <br />
      <button
        onClick={() => dispatchValue({ type: "decrease" })}
        disabled={value === 0}
      >
        decrease
      </button>
      <h3>cake shop</h3>
      <button onClick={() => dispatchCake({ type: "buy" })}>Buy</button>
      <br />
      <h3>Current Cakes: {cake}</h3>
      <br />
      <button
        onClick={() => dispatchCake({ type: "sell" })}
        disabled={cake === 0}
      >
        Sell
      </button>
    </>
  );
};

export default UseReducerPractice;
