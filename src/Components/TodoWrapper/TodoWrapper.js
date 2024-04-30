import "./TodoWrapper.css";
//? Forgot to import useState
import React, { useState } from "react";
import { TodoForm } from "../TodoForm/TodoForm";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
import { Todo } from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    //* creating an object so it'll have the necessary information and an unique id attached to it
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, isEditing: false, completed: false },
    ]);
  };

  const deleteTodos = (id) => {
    //* using the filter method so that it'll return a new array with the removed todo
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodos = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const submitEditTodos = (task, id) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo //* toggle isEditing to remove the edit component
      )
    );
  };

  return (
    //TODO: use map method to render Todo components and to render EditTodoForm component
    <div className="todoWrapper">
      <h1>My To-Do List</h1>
      <TodoForm addTodos={addTodos} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm submitEditTodos={submitEditTodos} todo={todo} />
        ) : (
          <Todo todo={todo} deleteTodos={deleteTodos} editTodos={editTodos} />
        )
      )}
    </div>
  );
};
