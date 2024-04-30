import React from "react";

export default function Button(props) {
  const { onClick, disabled, children } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: "#fefefe",
        color: "#101010",
        padding: 6,
        borderRadius: 4,
        border: "0px",
        fontWeight: 500,
        fontSize: "16px",
        cursor: "pointer",
        minWidth: "77px",
      }}
    >
      {children}
    </button>
  );
}
