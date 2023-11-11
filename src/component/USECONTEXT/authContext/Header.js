import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthPage";

const Header = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    console.log(isLoggedIn);
    return (
        <div className="flex justify-between px-10 py-3 bg-white shadow-lg items-center">
            <h1>My App</h1>
            {isLoggedIn ? (
                <div className="flex items-center">
                    <p>
                        Welcome <b>{isLoggedIn.username}</b> You are logged in.
                    </p>
                    <button className="bg-gray-200 py-1 px-4 ms-3 rounded-2xl" onClick={logout}>
                        Logout
                    </button>
                </div>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
};

export default Header;
