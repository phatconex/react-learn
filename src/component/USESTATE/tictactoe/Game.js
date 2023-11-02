import React, { useState } from "react";
import "./GameStyle.css";

//Tạo 1 cái ô có 2 props là giá trị click vào và sự kiện click vào
const Cell = (props) => {
    return (
        <div className={`cell ${props.value === "X" ? "is-x" : "is-o"}`} onClick={props.onClick}>
            {props.value}
        </div>
    );
};
const Board = () => {
    //Tạo trạng thái cell gán tất cả 9 ô là giá trị null
    const [cells, setCells] = useState(Array(9).fill(null));
    //Tạo state trạng thái của X mặc định là true
    const [isX, setIsX] = useState(true);

    const handleClick = (index) => {
        //Nếu kiểm tra có người thắng thì dừng function lại luôn
        if (calculateWinner(cells)) {
            return;
        }

        //set lại trang thái của 1 ô và của cả 9 ô
        cells[index] = isX ? "X" : "O";
        setCells(cells);
        setIsX(!isX);
    };

    //Kiểm tra ai thắng để xuất ra
    const winner = calculateWinner(cells);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${isX ? "X" : "0"}`;
    }

    //Restart game
    const handleRestart = () => {
        setIsX(true);
        setCells(Array(9).fill(null));
    };

    return (
        <div className="game-board">
            <div className="cell-list">
                {cells.map((item, index) => (
                    <Cell
                        key={index}
                        value={cells[index]}
                        onClick={() => handleClick(index)}
                    ></Cell>
                ))}
            </div>
            <div className="status">{status}</div>
            <button className="restart" onClick={handleRestart}>
                RESTART
            </button>
        </div>
    );
};
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
    return <Board></Board>;
};

export default Game;
