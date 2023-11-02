import React, { useRef, useEffect, useState } from "react";

const CountRef = () => {
    const valueRef = useRef();
    const [value, setValue] = useState(0);

    useEffect(() => {
        valueRef.current = value;
        console.log(`Giá trị đã thay đổi thành: ${value}`);
    }, [value]);

    const handleChangeValue = () => {
        setValue((prevValue) => prevValue + 1);
        console.log(`Giá trị trước đó là: ${valueRef.current}`);
    };
    return (
        <div>
            <p>Giá trị hiện tại: {value}</p>
            <button onClick={handleChangeValue}>Tăng giá trị</button>
        </div>
    );
};

export default CountRef;
