import React, { useState, useCallback } from "react";
import Todo from "./Todo";

const Home = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, "new task"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "new task"]);
  }, [todos]);

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>Count: {count}</p>
    </>
  );
};

export default Home;

//The Todo component is wrapped in the React.memo higher-order component, which provides a performance optimization by memoizing the component based on its props.

// However, the addTodo function is defined inside the Home component and passed down to the Todo component as a prop. Therefore, every time the Home component re-renders (e.g., due to the state update from clicking the "Click Me" button), a new reference to the addTodo function is created. Since the Todo component receives a new reference to the addTodo function every time, it will also re-render and log to the console even though its props (todos) have not changed.

// To fix this, you can also wrap the addTodo function with React.useCallback hook to memoize the function and prevent it from being recreated on every render.

// after using useCallback..
// Now the addTodo function is only recreated when its dependencies (setTodos) change, and the Todo component will not re-render unnecessarily.
