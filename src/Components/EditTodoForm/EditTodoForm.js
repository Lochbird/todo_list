import React, { useState } from "react";

export const EditTodoForm = ({ submitEditTodos, todo }) => {
  const [value, setValue] = useState("");

  const editTodosSubmit = (e) => {
    e.preventDefault();
    submitEditTodos(value, todo.id);
    setValue("");
  };

  return (
    <div>
      <form className="edit-todo__form" onSubmit={editTodosSubmit}>
        <input
          type="text"
          placeholder="Edit Task"
          className="edit-todo__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit" className="edit-todo__button" />
      </form>
    </div>
  );
};
