import React from "react";
import { useTodos } from "./hooks/useTodos";
import AddTodoForm from "./features/addTodoForm/AddTodoForm";
import EditTodoForm from "./features/editTodoForm/EditTodoForm";
import Todo from "./features/todo/Todo";

export function App() {
  const { todos, addTodos, submitEditTodos, deleteTodos, editTodos } =
    useTodos();

  return (
    <div style={{ background: "#cecece", height: "100vh" }}>
      <div style={{ margin: "0 auto", width: "fit-content", height: "100%" }}>
        <h1
          style={{
            fontSize: "30px",
            color: "#101010",
            fontWeight: 300,
            marginTop: "80px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          My To-Do List
        </h1>
        <AddTodoForm addTodos={addTodos} />
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            overflowY: "auto",
          }}
        >
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm
                key={todo.id} // Don't forget whenever you map to produce JSX, you must supply the "key prop"
                submitEditTodos={submitEditTodos}
                todo={todo}
              />
            ) : (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodos={deleteTodos}
                editTodos={editTodos}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
