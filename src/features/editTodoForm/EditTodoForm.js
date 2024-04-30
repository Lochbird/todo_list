import React, { useState } from "react";
import TextFeild from "../../components/TextFeild";
import Button from "../../components/Button";

export default function EditTodoForm(props) {
  const { submitEditTodos, todo } = props;

  const [value, setValue] = useState("");

  const handleEditTodos = (e) => {
    e.preventDefault();
    if (value === "") return;
    submitEditTodos(value, todo.id);
    setValue("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "8px 0px",
      }}
    >
      <TextFeild placeholder="Edit Task" value={value} setValue={setValue} />
      <Button onClick={handleEditTodos} disabled={value === ""}>
        Save
      </Button>
    </div>
  );
}
