import React, { useRef, useState } from "react";
import "./BauCua.css";
const BauCua = () => {
    const arrBauCua = ["bau", "cua", "tom", "ca", "ga", "nai"];
    const imgRef = useRef();
    const [select, setSelect] = useState([]);
    const [random, setRandom] = useState([]);
    const [money, setMoney] = useState(100);
    const handleCheck = (item) => {
        const newSelect = [...select];

        //check tồn tại chưa
        const checkExit = newSelect.includes(item);
        if (checkExit) {
            //nếu tồn tại thì bỏ cái item đó ra
            const filterItem = newSelect.filter((newItem) => item !== newItem);
            setSelect(filterItem);
        } else {
            newSelect.push(item);
            setSelect(newSelect);
        }
    };
    const handlePlay = () => {
        imgRef.current.style.display = "block";
        setTimeout(() => {
            imgRef.current.style.display = "none";

            const randomBauCua1 = arrBauCua[Math.floor(Math.random() * arrBauCua.length)];
            const randomBauCua2 = arrBauCua[Math.floor(Math.random() * arrBauCua.length)];
            const randomBauCua3 = arrBauCua[Math.floor(Math.random() * arrBauCua.length)];

            const newRandom = [];
            newRandom.push(randomBauCua1, randomBauCua2, randomBauCua3);
            setRandom(newRandom);

            const checkResult = newRandom.filter((item) => select.includes(item));
            setMoney(money + checkResult.length * 10 - (3 - checkResult.length) * 10);
        }, 3000);
    };
    return (
        <div className="baucua">
            <div className="money">
                Tiền của bạn: <b>{money}</b> tr
            </div>
            <div className="result">
                <p>
                    Bạn chọn: <span>{select.toString()}</span>
                </p>
                <p>
                    Xốc ra: <span>{random.toString()}</span>
                </p>
            </div>
            <div className="board">
                {arrBauCua.map((item, index) => (
                    <div key={index} className="item">
                        <img src={`img/baucua/${item}.png`} alt="" />
                        <input type="checkbox" name="choose" onChange={() => handleCheck(item)} />
                    </div>
                ))}
            </div>
            <div className="img" ref={imgRef}>
                <img src="img/baucua/xoc.gif" alt="" />
            </div>
            <button className="play" onClick={handlePlay}>
                Chơi luôn
            </button>
        </div>
    );
};

export default BauCua;
