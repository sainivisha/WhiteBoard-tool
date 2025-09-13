import React, { useState, useEffect, useContext } from "react";
import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import toolboxContext from "./store/toolbox-context";
import boardContext from "./store/board-context";

function App() {
  const [darkMode, setDarkMode] = useState();
  const { changeBoxColor } = useContext(toolboxContext);
  const { themeColor, changeThemeColor } = useContext(boardContext);

  const handleChangeTheme = (isTheme) => {
    setDarkMode(isTheme);
    // Use the new theme value to determine the color
    isTheme ? changeBoxColor("#FFFFFF") : changeBoxColor("#000000");
    isTheme ? changeThemeColor("#FFFFFF") : changeThemeColor("#000000");
  };
  useEffect(() => {
    setDarkMode(themeColor);
  }, [themeColor]);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <button
        onClick={() => handleChangeTheme(!darkMode)}
        className="theme-toggle"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Toolbar darkMode={darkMode} />
      <Board darkMode={darkMode} />
      <Toolbox />
    </div>
  );
}

export default App;
