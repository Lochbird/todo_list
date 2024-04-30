import React from "react";
//? learn more about fontawesomeicon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo, deleteTodos, editTodos }) => {
  return (
    <div className="todo">
      <p className="todo__task">{todo.task}</p>
      <div className="todo__buttons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodos(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodos(todo.id)} />
      </div>
    </div>
  );
};
