import React, { useState } from "react";

const Count = () => {
    // Khởi tạo state `count` với giá trị ban đầu là 0
    const [count, setCount] = useState(1);

    // Hàm tăng giá trị của `count` lên 1
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h2>Counter</h2>
            <p>Giá trị hiện tại: {count}</p>
            <button onClick={increment}>Tăng</button>
        </div>
    );
};

export default Count;
