import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo, toggleToDo } from "../modules/todo";

function ToDoContainer() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const onAddToDo = (text) => {
    console.log(text);
    dispatch(addToDo(text));
  };
  const onToggleToDo = (id) => {
    dispatch(toggleToDo(id));
  };

  return (
    <ToDo todos={todos} onAddToDo={onAddToDo} onToggleToDo={onToggleToDo} />
  );
}

export default ToDoContainer;
