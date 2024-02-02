import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const PageContext = createContext();

const PageProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [count, setCount] = useState(0);
    const [login, setLogin] = useState(localStorage.getItem("LOGIN_INFO") ? JSON.parse(localStorage.getItem("LOGIN_INFO")) : {});
    const handleCount = (type) => {
        if (type === "minus") {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
    };
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const handleLogin = (user) => {
        setLogin(user);
        localStorage.setItem("LOGIN_INFO", JSON.stringify(user));
    };
    const handleLogout = () => {
        setLogin({});
        localStorage.removeItem("LOGIN_INFO");
        toast.success("Logout success", {
            position: "top-center",
        });
    };

    return (
        <PageContext.Provider value={{ toggleTheme, theme, handleCount, count, handleLogin, login, handleLogout }}>{children}</PageContext.Provider>
    );
};

const usePage = () => {
    return useContext(PageContext);
};

export { PageProvider, usePage };
