import React, { useState } from "react";

const SimpleValidate = () => {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        rePassword: "",
    });
    const [err, setErr] = useState({
        fullname: "",
        email: "",
        password: "",
        rePassword: "",
    });
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {
            fullname: "",
            email: "",
            password: "",
            rePassword: "",
        };
        if (!form.fullname) {
            newErrors.fullname = "Fullname can't be empty";
        }

        const reEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!form.email) {
            newErrors.email = "Email can't be empty";
        } else if (!reEmail.test(form.email)) {
            newErrors.email = "Email invalidate";
        }

        if (!form.password) {
            newErrors.password = "Password can't be empty";
        }

        if (!form.rePassword) {
            newErrors.rePassword = "RePassword can't be empty";
        } else if (form.rePassword !== form.password) {
            newErrors.rePassword = "Repassword and password do not match";
        }

        setErr(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    };
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePass = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-10 w-4/5 mx-auto rounded-3xl bg-[url('https://static.vecteezy.com/system/resources/previews/002/166/293/original/abstract-geometric-shape-gradient-background-free-vector.jpg')] bg-cover">
                    <div className="w-1/2 ms-auto p-28 bg-white rounded-2xl shadow-2xl">
                        <h2 className="text-center text-xl mb-5">Get Started</h2>
                        <div className="mb-7">
                            <label className="block mb-1 text-sm" htmlFor="fullname">
                                Fullname <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullname"
                                className="border border-[#ddd] w-full p-2 rounded-md outline-none"
                                onChange={handleInputChange}
                            />
                            <div className="text-red-600 text-xs mt-1">{err.fullname}</div>
                        </div>
                        <div className="mb-7">
                            <label className="block mb-1 text-sm" htmlFor="email">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                className="border border-[#ddd] w-full p-2 rounded-md outline-none"
                                onChange={handleInputChange}
                            />
                            <div className="text-red-600 text-xs mt-1">{err.email}</div>
                        </div>
                        <div className="mb-7">
                            <label className="block mb-1 text-sm" htmlFor="password">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="border border-[#ddd] w-full p-2 rounded-md outline-none"
                                    onChange={handleInputChange}
                                />
                                <div
                                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={handleTogglePass}
                                >
                                    <i className="fa-regular fa-eye"></i>
                                </div>
                            </div>
                            <div className="text-red-600 text-xs mt-1">{err.password}</div>
                        </div>
                        <div className="mb-7">
                            <label className="block mb-1 text-sm" htmlFor="rePassword">
                                rePassword <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                name="rePassword"
                                className="border border-[#ddd] w-full p-2 rounded-md outline-none"
                                onChange={handleInputChange}
                            />
                            <div className="text-red-600 text-xs mt-1">{err.rePassword}</div>
                        </div>
                        <button className="w-full bg-[#4e2e91] text-white p-2 rounded-md">
                            Sign up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SimpleValidate;
