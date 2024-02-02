import React, { useContext } from "react";
import BoxContent from "./BoxContent";
import "./DarkMode.css";
import { useTheme } from "./ThemeContext";

const DarkMode = () => {
    const context = useTheme();
    return (
        <div>
            <button onClick={context.toggleTheme}>Toggle DarkMode</button>
            <BoxContent></BoxContent>
        </div>
    );
};

export default DarkMode;
