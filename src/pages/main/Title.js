import React from "react";
import "./Title.scss";

function Title({ title, color }) {
  return (
    <div className="banner2-title">
      <h2 style={{ color: color }}>{title}</h2>
      <p style={{ background: color }} className="bar"></p>
    </div>
  );
}

export default Title;
