import React from "react";

const MenuItem = (props) => {
    return (
        <div className="menuItem">
            <div className="menuTop">
                <h3>
                    {props.title} {props.choice && <span>Recommed</span>}
                </h3>
                <p>${props.price}</p>
            </div>
            <div className="menuBot">
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default MenuItem;
