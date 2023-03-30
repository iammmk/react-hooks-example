import React from "react";

const Todo = React.memo((props) => {
  console.log("Todo rendered");
  return (
    <>
      <h3>My Todos</h3>
      {props.todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}
      <button onClick={() => props.addTodo()}>Add Todo</button>
      <br />
    </>
  );
});

export default Todo;
