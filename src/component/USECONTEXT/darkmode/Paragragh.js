import React from "react";
import { useTheme } from "./ThemeContext";
const Paragragh = () => {
    const context = useTheme();
    console.log(context);
    return (
        <div>
            <p className={`${context.darkMode && "dark"}`}>
                React Context is a way to manage state globally.It can be used together with the useState Hook to share state between deeply nested
                components more easily than with useState alone.State should be held by the highest parent component in the stack that requires access
                to the state.
            </p>
        </div>
    );
};

export default Paragragh;
