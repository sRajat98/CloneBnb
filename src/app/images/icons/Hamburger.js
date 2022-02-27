import React from "react";

const Hamburger = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        fill: "none",
        height: "inherit",
        width: "inherit",
        stroke: "currentcolor",
        strokeWidth: 3,
        overflow: "visible",
      }}
    >
      <g fill="none" fill-rule="nonzero">
        <path d="m2 16h28"></path>
        <path d="m2 24h28"></path>
        <path d="m2 8h28"></path>
      </g>
    </svg>
  );
};

export default Hamburger;