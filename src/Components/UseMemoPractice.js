import React, { useMemo, useState } from "react";

// useMemo helps optimize performance by allowing you to memoize expensive computations and avoid re-computing them unnecessarily.
const UseMemoPractice = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const modifiedCount = (count) => {
    console.log("today is thursday");
    for (let i = 0; i < 100000; i++) {}
    return count;
  };

  // const newCount = modifiedCount(count);

  // useMemo used to memoize expensive computations so that they are not unnecessarily re-computed on every render of a component.

  // When you use useMemo, you provide a function that returns a value. The hook will only re-run this function and update the memoized value if one of the dependencies you pass in changes. If the dependencies do not change, the hook will return the previously memoized value, avoiding unnecessary re-computation.
  const newCount = useMemo(() => {
    return modifiedCount(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click here</button>
      <p>You clicked {newCount} times</p>
      <button onClick={() => setShow(!show)}>
        {show ? "Click Me" : "You have clicked me"}
      </button>
    </>
  );
};

export default UseMemoPractice;
