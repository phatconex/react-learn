import React, { useState } from "react";

const Input = () => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
    });
    const handleChangeInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    };
    console.log(values);
    return (
        <div>
            <input
                name="fullname"
                type="text"
                placeholder="username"
                onChange={handleChangeInput}
            />
            <input name="email" type="text" placeholder="email" onChange={handleChangeInput} />

            <input name="like" type="checkbox" onChange={handleChangeInput} />
        </div>
    );
};

export default Input;
