import React from "react";
import DarkLogo from "../../img/logo-dark.png";
import WiredLogo from "../../img/wired-logo.png";

function Hero() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 30, flex: 1 }}>
        <img src={DarkLogo} style={{ height: "100%" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "var(--primary-color)"
        }}
      >
        <div>
          <img src={WiredLogo} /> presents...
        </div>
        <div>
          <span style={{ fontFamily: "Courier", fontSize: 50 }}>
            Bit by Bit Hack
          </span>
        </div>
        <div>2019</div>
      </div>
    </div>
  );
}

export default Hero;
