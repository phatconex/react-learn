import React, { useState } from "react";
import { usePage } from "./PageContext";

const CountNumber = () => {
    const { handleCount, count } = usePage();
    return (
        <div className="w-28 m-auto border-2 text-center mt-10 p-3 flex justify-between">
            <span className="cursor-pointer text-2xl" onClick={() => handleCount("minus")}>
                -
            </span>
            <input type="text" value={count} className="w-3 outline-none" />
            <span className="cursor-pointer text-2xl" onClick={() => handleCount("plus")}>
                +
            </span>
        </div>
    );
};

export default CountNumber;
