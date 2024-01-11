import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const PageContext = createContext();

const PageProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [login, setLogin] = useState();
    const [count, setCount] = useState(0);
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
    const getLogin = (user) => {
        setLogin(user);
        localStorage.setItem("LOGIN_INFO", JSON.stringify(user));
    };

    useEffect(() => {
        setLogin(JSON.parse(localStorage.getItem("LOGIN_INFO")));
    }, []);

    const logOut = () => {
        setLogin();
        localStorage.removeItem("LOGIN_INFO");
        toast.success("Success Logout !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };

    return <PageContext.Provider value={{ toggleTheme, theme, getLogin, login, logOut, handleCount, count }}>{children}</PageContext.Provider>;
};

const usePage = () => {
    return useContext(PageContext);
};

export { PageProvider, usePage };
