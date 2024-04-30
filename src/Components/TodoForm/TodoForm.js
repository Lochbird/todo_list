import React, { useState } from "react";

//! why do you have to wrap addTodos in curly braces?
//? note: The code did not recognize it as a function, is that why?
export function TodoForm({ addTodos }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(value);
    setValue("");
  };
  return (
    //? form needs an ending tag and the children are the inputs/buttons/etc */
    //? you add the submit property to the form
    <form className="todo-form" onSubmit={handleSubmit}>
      {/* //? you use the useState to acquire and change the values from the input */}
      <input
        type="text"
        placeholder="Enter Task"
        className="todo-input"
        value={value}
        // ? using the onChange function, I am able to acquire the input of the user
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit" className="todo-submit">
        Add Task
      </button>
    </form>
  );
}
