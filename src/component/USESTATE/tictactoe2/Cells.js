import React from "react";

const Cells = (props) => {
    return (
        <div className={`cell ${props.value === "X" ? "is-x" : "is-o"}`} onClick={props.onclick}>
            {props.value}
        </div>
    );
};

export default Cells;
