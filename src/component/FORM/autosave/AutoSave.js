import React, { useState, useEffect } from "react";
import Input from "./Input";

function AutoSave() {
    const initialState = localStorage.getItem("formData")
        ? JSON.parse(localStorage.getItem("formData"))
        : { title: "", content: "", end: "" };

    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    // Sử dụng useEffect để lưu dữ liệu mỗi khi formData thay đổi
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    // Lấy dữ liệu từ Local Storage khi component được tạo
    useEffect(() => {
        if (localStorage.getItem("formData")) {
            setFormData(JSON.parse(localStorage.getItem("formData")));
        }
    }, []);
    return (
        <div className="w-1/3 shadow-2xl p-10 rounded-2xl m-auto mt-3">
            <h1 className="mb-5 text-2xl text-blue-500 font-semibold">AUTO EMAIL</h1>
            <form>
                <Input title="Title" name="title" handle={handleChange}></Input>
                <Input title="Contend" name="content" handle={handleChange}></Input>
                <Input title="End" name="end" handle={handleChange}></Input>
            </form>
            <div className="bg-gray-100 p-10 rounded-xl">
                <p className="font-medium border-l-2 ps-2 border-l-red-600">{formData.title}</p>
                <p className="my-3 font-light">{formData.content}</p>
                <p>{formData.end}</p>
            </div>
        </div>
    );
}

export default AutoSave;
