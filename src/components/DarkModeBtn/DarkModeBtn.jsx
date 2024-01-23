import { useState } from "react";
import "./DarkModeBtn.scss";

const DarkModeBtn = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToDark = () => {
    setIsDark(true);
  };
  const handleToLight = () => {
    setIsDark(false);
  };

  return (
    <div className="mode-container">
      <button
        onClick={handleToLight}
        className={
          isDark
            ? "mode-container__light mode-container__light--dark"
            : "mode-container__light"
        }>
        light
      </button>{" "}
      <button
        onClick={handleToDark}
        className={
          isDark
            ? "mode-container__dark mode-container__dark--dark"
            : "mode-container__dark"
        }>
        dark
      </button>
    </div>
  );
};

export default DarkModeBtn;
