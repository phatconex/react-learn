import React, { useState } from "react";
import BoxContent from "./BoxContent";
import ThemeContext from "./ThemeContext";

const DarkMode = () => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle DarkMode
            </button>
            <BoxContent></BoxContent>
        </ThemeContext.Provider>
    );
};

export default DarkMode;
