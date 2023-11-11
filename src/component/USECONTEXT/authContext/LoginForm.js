import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthPage";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isLoggedIn, login } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        login({ username, password });
    };
    return (
        <div>
            {isLoggedIn && (
                <div className="p-10 border bg-white shadow-lg w-2/6 m-auto mt-10">
                    <h2 className="font-medium text-2xl mb-5">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-5">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="block border border-gray-400 w-full mt-3 p-2"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="block border border-gray-400 w-full mt-3 p-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-black text-white p-2">
                            Login
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
