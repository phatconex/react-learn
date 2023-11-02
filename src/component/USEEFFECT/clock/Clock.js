import React, { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        // Cleanup function
        return () => clearInterval(intervalId);
    }, []);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <div>
            <span>{hours}</span>
            <span>{minutes}</span>
            <span>{seconds}</span>
        </div>
    );
};

export default Clock;
