import React from "react";

export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        padding: "20px",
      }}
    >
      <h1>Dark Layout</h1>
      <div>{children}</div>
    </div>
  );
};
