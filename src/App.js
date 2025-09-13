// src/App.js
import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/toolboxProvider";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <BoardProvider isDarkMode={darkMode}>
        <ToolboxProvider>
          <Toolbar darkMode={darkMode} />
          <Board darkMode={darkMode} />
          <Toolbox />
        </ToolboxProvider>
      </BoardProvider>
    </div>
  );
}

export default App;
