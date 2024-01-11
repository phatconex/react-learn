import React, { useState } from "react";
import { usePage } from "./PageContext";
import "./PageContext.css";
import { toast } from "react-toastify";
const LoginForm = () => {
    const { theme, getLogin } = usePage();
    const [form, setForm] = useState({});
    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        getLogin(form);
        setForm({});
        toast.success("Success Login !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };

    return (
        <div className={`p-10 border bg-white shadow-lg w-2/6 m-auto mt-10 ${theme}`}>
            <h2 className="font-medium text-2xl mb-5">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label>Username:</label>
                    <input type="text" name="username" className="block border border-gray-400 w-full mt-3 p-2" onChange={handleInput} />
                </div>
                <div className="mb-5">
                    <label>Password:</label>
                    <input type="password" name="password" className="block border border-gray-400 w-full mt-3 p-2" onChange={handleInput} />
                </div>
                <button type="submit" className={`w-full p-2 ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
