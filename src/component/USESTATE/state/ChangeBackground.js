import React, { useState } from "react";
import "./style.css";
const ChangeBackground = () => {
    const [backgroundColor, setBackgroundColor] = useState("#0f2cfc");
    const changeBackground = () => {
        const newColor = backgroundColor === "#0f2cfc" ? "#ff9d00" : "#0f2cfc";
        setBackgroundColor(newColor);
    };
    return (
        <div className="background" style={{ backgroundColor }}>
            <button onClick={changeBackground}>Change Background</button>
        </div>
    );
};

export default ChangeBackground;
