import React, { createContext, useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

export const AuthContext = createContext();
const AuthPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const login = (user) => {
        setIsLoggedIn(user);
    };
    const logout = (user) => {
        setIsLoggedIn();
    };
    return (
        <AuthContext.Provider value={{ login, isLoggedIn, logout }}>
            <Header></Header>
            <LoginForm></LoginForm>
        </AuthContext.Provider>
    );
};

export default AuthPage;
