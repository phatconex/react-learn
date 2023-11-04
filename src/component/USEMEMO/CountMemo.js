import React, { useState } from "react";
import ContentMemo from "./ContentMemo";

const CountMemo = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <ContentMemo></ContentMemo>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
        </div>
    );
};

export default CountMemo;
