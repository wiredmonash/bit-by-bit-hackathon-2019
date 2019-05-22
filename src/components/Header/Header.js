import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "var(--primary-color)",
        color: "var(--secondary-color)",
        padding: 20
      }}
    >
      <span style={{ fontFamily: "Courier" }}>Bit-by-Bit 2019</span>
    </div>
  );
}

export default Header;
