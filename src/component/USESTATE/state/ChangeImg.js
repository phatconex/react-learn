import React, { useState } from "react";
import "./style.css";
const ChangeImg = () => {
    const arrImg = [
        "/img/product-1.png",
        "/img/product-2.png",
        "/img/product-3.png",
        "/img/product-4.png",
        "/img/product-5.png",
    ];
    const [img, setImg] = useState(arrImg[0]);
    const handleImg = (index) => {
        setImg(arrImg[index]);
    };
    return (
        <div>
            <div className="moto">
                <img src={img} alt="" />
            </div>
            <ul className="list-color">
                {arrImg.map((item, index) => (
                    <li onClick={() => handleImg(index)}>
                        <img src={item} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChangeImg;
