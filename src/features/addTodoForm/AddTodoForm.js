import React, { useState } from "react";
import TextFeild from "../../components/TextFeild";
import Button from "../../components/Button";

export default function AddTodoForm(props) {
  const { addTodos } = props;

  const [value, setValue] = useState("");

  const handleAddTodo = () => {
    if (value === "") return; // Prevent adding empty todos
    addTodos(value);
    setValue("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
      <TextFeild placeholder="Enter Task" value={value} setValue={setValue} />
      <Button onClick={handleAddTodo} disabled={value === ""}>
        Add Task
      </Button>
    </div>
  );
}
