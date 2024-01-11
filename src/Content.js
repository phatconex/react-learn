import React, { useState, useEffect } from "react";

const Content = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log("Mounted");
    });
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Count</button>
            {console.log("Render")}
        </div>
    );
};

export default Content;
