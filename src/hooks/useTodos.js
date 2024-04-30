import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    // Its okay to have more lines of code if it makes the code more easy to understand
    const newTodo = {
      id: uuidv4(),
      task: todo,
      isEditing: false,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodos = (id) => {
    setTodos(
      todos.map(
        (todo) => (todo.id === id ? { ...todo, isEditing: true } : todo) // Be explicit when you're setting the isEditing. You know it should always be true. !todo.isEditing can introduce bugs
      )
    );
  };

  const submitEditTodos = (task, id) => {
    setTodos(
      todos.map(
        (todo) => (todo.id === id ? { ...todo, task, isEditing: false } : todo) // Be explicit when you're setting the isEditing. You know it should always be false.
      )
    );
  };

  return {
    todos,
    addTodos,
    deleteTodos,
    editTodos,
    submitEditTodos,
  };
}
