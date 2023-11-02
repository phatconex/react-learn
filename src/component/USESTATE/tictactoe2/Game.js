import React, { useState } from "react";
import Cells from "./Cells";
import "./GameStyle.css";
function calculateWinner(cells) {
    const winCheck = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    //Không dùng foreach ở đây vì foreach không có return được
    for (let i = 0; i < winCheck.length; i++) {
        //Gán 3 biến a b c chính là 3 vị trí của 1 trường hợp thắng vd a=0, b=1,c=2
        const [a, b, c] = winCheck[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}
const Game = () => {
    //Tạo trạng thái cell gán tất cả 9 ô là giá trị null
    const [cells, setCells] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const changeCells = (index) => {
        cells[index] = isX ? "X" : "O";
        setCells(cells);
        setIsX(!isX);
    };
    calculateWinner(cells);
    return (
        <div className="game-board">
            <div className="cell-list">
                {cells.map((item, index) => (
                    <Cells
                        key={index}
                        value={cells[index]}
                        onclick={() => changeCells(index)}
                    ></Cells>
                ))}
            </div>
            <div className="status"></div>
            <button className="restart">RESTART</button>
        </div>
    );
};

export default Game;
