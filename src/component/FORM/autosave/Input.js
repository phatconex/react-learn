import React from "react";

const Input = (props) => {
    return (
        <div className="mb-5">
            <label className="block mb-2 font-medium" htmlFor={props.name}>
                {props.title}
            </label>
            <input
                className="w-full border border-gray-200 outline-none p-2 rounded-xl"
                type="text"
                name={props.name}
                value={props.value}
                onChange={props.handle}
            />
        </div>
    );
};

export default Input;
