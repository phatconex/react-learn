import React, { useRef, useState } from "react";
import "./style.css";
const StopWatch = () => {
    const timerRef = useRef(null);
    const [count, setCount] = useState(0);
    const [times, setTimes] = useState([]);
    const handleStart = () => {
        timerRef.current = setInterval(() => {
            setCount((counter) => counter + 1);
        }, 1000);
    };
    const handleStop = () => {
        clearInterval(timerRef.current);
        setTimes([...times, count]);
    };
    return (
        <div className="stopWatch">
            <h3>{count}s</h3>
            <ul>
                {times.map((item, index) => (
                    <li key={index}>{item}s</li>
                ))}
            </ul>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
};

export default StopWatch;
