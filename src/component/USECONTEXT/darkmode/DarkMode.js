import React from "react";
import BoxContent from "./BoxContent";
import { useTheme } from "./ThemeContext";

const DarkMode = () => {
    const { toggleTheme } = useTheme();
    return (
        <div>
            <button onClick={toggleTheme}>Toggle DarkMode</button>
            <BoxContent></BoxContent>
        </div>
    );
};

export default DarkMode;
