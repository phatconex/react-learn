import React, { useState } from "react";
import "./style.css";
const Toggle = () => {
    const [toggle, setToggle] = useState(false);
    const Toggle = () => {
        setToggle(!toggle);
    };
    return (
        <div className={`toggle ${toggle ? "active" : ""}`} onClick={Toggle}>
            <div className="circle"></div>
        </div>
    );
};

export default Toggle;
