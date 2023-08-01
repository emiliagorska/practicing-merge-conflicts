import React from "react";
import "./Title.css";

const Title = ({ children, marginBottom }) => {
  return (
    <div className="titleContainer">
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
