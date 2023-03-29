import React, { useState, useEffect } from "react";

function UseEffectPractice() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("check return");
    };
  }, [count]);

  return (
    <>
      <button onClick={handleIncrease}>increase</button>
      <br />
      <h3>Current value: {count}</h3>
      <br />
      <button onClick={handleDecrease} disabled={count === 0}>
        decrease
      </button>
    </>
  );
}

export default UseEffectPractice;
