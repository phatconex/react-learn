import React, { useRef, useEffect, useState } from "react";

const InputFocus = () => {
    const inputRef = useRef();
    const [food, setFood] = useState("");
    const [arrFood, setArrFood] = useState([]);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const handleAddFood = (e) => {
        if (e.key === "Enter") {
            setArrFood([...arrFood, food]);
            setFood("");
        }
    };
    console.log(arrFood);
    return (
        <div className="border border-2 border-gray-500 rounded w-4/12 m-auto my-20 p-10">
            <input
                ref={inputRef}
                type="text"
                placeholder="What food you want ?"
                className="w-full p-3 border border-gray-400 outline-none mb-5"
                onKeyDown={handleAddFood}
                value={food}
                onChange={(e) => setFood(e.target.value)}
            />
            <ul>{arrFood && arrFood.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
    );
};

export default InputFocus;
