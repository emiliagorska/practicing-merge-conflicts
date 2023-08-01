import React from "react";
import "./ActionButton.css";

const ActionButton = ({ children, marginBottom }) => {
  return (
    <>
      <button className="actionButton" style={{ marginBottom: marginBottom }}>
        {children}
      </button>
    </>
  );
};

export default ActionButton;
