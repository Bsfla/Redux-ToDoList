import React, { useState } from "react";

const ToDoListItem = ({ todo, onToggleToDo }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggleToDo(todo.id)}
    >
      {todo.text}
    </li>
  );
};

const ToDoList = React.memo(function TodoList({ todos, onToggleToDo }) {
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <ToDoListItem key={todo.id} todo={todo} onToggleToDo={onToggleToDo} />
        ))}
    </ul>
  );
});
const ToDo = ({ todos, onAddToDo, onToggleToDo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onAddToDo(text);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} />
        <button>등록</button>
      </form>
      <ToDoList todos={todos} onToggleToDo={onToggleToDo} />
    </div>
  );
};

export default ToDo;
