import "./TodoWrapper.css";
//? Forgot to import useState
import React, { useState } from "react";
import { TodoForm } from "../TodoForm/TodoForm";
import { Todo } from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //TODO: addTodos, deleteTodos, editTodos, submitEditTodos

  const addTodos = (todo) => {
    //* creating an object so it'll have the necessary information and an unique id attached to it
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, isEditing: false, completed: false },
    ]);
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    //TODO: use map method to render Todo components and to render EditTodoForm component
    <div className="todoWrapper">
      <h1>My To-Do List</h1>
      <TodoForm />
      <Todo />
    </div>
  );
};
