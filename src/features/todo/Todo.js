import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo(props) {
  const { todo, deleteTodos, editTodos } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "260px",
        padding: "15px 20px",
        background: "#fefefe",
        borderRadius: 4,
        alignItems: "center",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
      }}
    >
      <p>{todo.task}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4,
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodos(todo.id)}
          style={{ cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodos(todo.id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
