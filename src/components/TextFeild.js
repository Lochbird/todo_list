import React from "react";

export default function TextFeild(props) {
  const { value, setValue, placeholder } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{
        padding: 4,
        borderRadius: 4,
        fontSize: "16px",
        border: "1px solid #101010",
      }}
    />
  );
}
