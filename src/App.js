// src/App.js
import React from "react";
import Quote from "./components/Quote";
import "./styles.css"; // Import the CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Riddle Generator</h1>
      </header>
      <main>
        <Quote />
      </main>
    </div>
  );
}

export default App;
