import React from "react";
import BoxContent from "./BoxContent";
import { useTheme } from "./ThemeContext";

const DarkMode = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <div>
            <button onClick={theme.toggleTheme}>Toggle DarkMode</button>
            <BoxContent></BoxContent>
        </div>
    );
};

export default DarkMode;
