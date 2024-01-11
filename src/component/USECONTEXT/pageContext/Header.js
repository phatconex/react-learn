import React from "react";
import { usePage } from "./PageContext";

const Header = () => {
    const { theme, toggleTheme, login, logOut, count } = usePage();
    return (
        <div className="flex justify-between px-10 py-3 bg-white shadow-lg items-center">
            <h1>My App</h1>

            <div className="flex items-center">
                <p>
                    Welcome <b>{login && login.username}</b>
                </p>
                {login && (
                    <button className="bg-gray-200 py-1 px-4 ms-3 rounded-2xl" onClick={logOut}>
                        Logout
                    </button>
                )}
            </div>
            <div>Product: {count}</div>
            <button onClick={toggleTheme} className="toggle bg-black text-white py-1 px-4 ms-3 rounded-2xl">
                {theme === "light" ? "Dark" : "Light"}
            </button>
        </div>
    );
};

export default Header;
