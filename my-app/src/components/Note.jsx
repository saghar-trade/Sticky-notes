import React from "react";

export default function Note(props) {
  const style = {
    backgroundColor: props.color, // 🎨 رنگ از props
    transform: `rotate(${props.rotate})`, // 🔄 زاویه از props
    boxShadow:
      "0 12px 18px rgba(0, 0, 0, 0.35), 0 2px 0 rgba(255, 255, 255, 0.25) inset",
    width: "150px",
    height: "150px",
    borderRadius: "4px",
    padding: "16px 14px",
    transition: "transform 0.18s ease, box-shadow 0.18s ease",
  };

  return (
    <li className="note" style={style}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </li>
  );
}
