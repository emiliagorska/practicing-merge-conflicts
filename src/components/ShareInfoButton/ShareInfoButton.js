import React from "react";
import "./ShareInfoButton.css";

const ShareInfoButton = ({ children, marginBottom }) => {
  return (
    <>
      <button
        className="shareInfoButton"
        style={{ marginBottom: marginBottom }}
      >
        {children}
      </button>
    </>
  );
};

export default ShareInfoButton;
