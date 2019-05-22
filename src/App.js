import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="app">
      <Header />
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <Hero />
      </div>
    </div>
  );
}

export default App;
