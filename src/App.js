import React, { useState } from "react";
import ToolBar from "./components/ToolBar";
import ThemeContext from "./BgColorContext";

const App = () => {
  const [bgColor, setBgColor] = useState("light");

  const contextValue = {
    bgColor: bgColor,
    updateBgColor: setBgColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={bgColor}>
        <ToolBar />
        <p>Backgound Color used is : {bgColor}</p>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
