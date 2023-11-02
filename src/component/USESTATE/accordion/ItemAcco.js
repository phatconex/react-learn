import React, { useState } from "react";

const ItemAcco = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccor = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`item ${isOpen && "active"}`}>
            <div className="item-title" onClick={toggleAccor}>
                <span>{props.title}</span>
                <i className="fa fa-angle-down fa-4" aria-hidden="true"></i>
            </div>
            <div className="item-body">
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default ItemAcco;
