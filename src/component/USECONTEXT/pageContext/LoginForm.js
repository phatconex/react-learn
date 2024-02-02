import React, { useState } from "react";
import { usePage } from "./PageContext";
import "./PageContext.css";
import { toast } from "react-toastify";
const LoginForm = () => {
    const users = [
        {
            id: 1,
            userName: "phat",
            passWord: "123456",
        },
        {
            id: 2,
            userName: "phuc",
            passWord: "123456",
        },
        {
            id: 3,
            userName: "phan",
            passWord: "987654",
        },
    ];

    const { theme, handleLogin } = usePage();
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState({
        username: "",
        password: "",
    });

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErr = {
            username: !form.username ? "Username not empty" : "",
            password: !form.password ? "Password not empty" : "",
        };
        setErr(newErr);

        if (Object.values(newErr).every((item) => !item)) {
            const findUser = users.find((item) => item.userName === form.username);
            if (findUser) {
                if (findUser.passWord === form.password) {
                    toast.success("Login success", {
                        position: "top-center",
                    });
                    handleLogin(form);
                } else {
                    toast.error("Wrong password", {
                        position: "top-center",
                    });
                }
            } else {
                toast.error("No account", {
                    position: "top-center",
                });
            }
        }
    };

    return (
        <div className={`p-10 border bg-white shadow-lg w-2/6 m-auto mt-10 ${theme}`}>
            <h2 className="font-medium text-2xl mb-5">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label>Username:</label>
                    <input
                        type="text"
                        defaultValue={form.username}
                        name="username"
                        className="block border border-gray-400 w-full mt-3 p-2"
                        onChange={handleInput}
                    />
                    <p className="text-red-600 mt-3">{err.username}</p>
                </div>
                <div className="mb-5">
                    <label>Password:</label>
                    <input
                        type="password"
                        defaultValue={form.password}
                        name="password"
                        className="block border border-gray-400 w-full mt-3 p-2"
                        onChange={handleInput}
                    />
                    <p className="text-red-600 mt-3">{err.password}</p>
                </div>
                <button type="submit" className={`w-full p-2 ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
