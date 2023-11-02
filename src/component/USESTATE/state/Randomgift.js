import React, { useState } from "react";

const Randomgift = () => {
    const arrayGift = ["Gấu bông", "Bánh kem", "Con heo", "Người Yêu"];
    const [gift, setGift] = useState();
    const randomGift = () => {
        const numberRandom = Math.floor(Math.random() * arrayGift.length);
        setGift(arrayGift[numberRandom]);
    };
    return (
        <div>
            <h1>{gift ? gift : "Chưa có phần quà"}</h1>
            <button onClick={randomGift}>Nhận quà đi bé</button>
        </div>
    );
};

export default Randomgift;
