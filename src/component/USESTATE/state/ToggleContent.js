import React, { useState } from "react";
import "./style.css";
const ToggleContent = () => {
    const [content, setContent] = useState("dog");
    const changeContent = () => {
        setContent(content === "dog" ? "cat" : "dog");
    };
    return (
        <div className="changeImg">
            <button onClick={changeContent}>Change {content === "dog" ? "cat" : "dog"}</button>
            <div className={`img ${content === "dog" ? "cat" : "dog"}`}>
                <img src="https://anphupet.com/wp-content/uploads/2020/07/cho-husky-de-thuong.jpg" />
                <img src="https://img5.thuthuatphanmem.vn/uploads/2022/01/11/anh-chu-meo-ngao-ngo_012114287.jpg" />
            </div>
        </div>
    );
};

export default ToggleContent;
