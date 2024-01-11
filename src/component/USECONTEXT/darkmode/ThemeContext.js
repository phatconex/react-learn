import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    const toggleTheme = () => {
        setDark(!dark);
    };

    return <ThemeContext.Provider value={{ dark, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
