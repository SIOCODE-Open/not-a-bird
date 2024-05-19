import React from "react";

function Sidebar() {
  return (
    <div
      style={{
        position: "fixed",
        width: "200px",
        height: "100%",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default Sidebar;
