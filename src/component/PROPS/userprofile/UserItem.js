import React from "react";

const UserItem = (props) => {
    return (
        <div className="user-item">
            <img src={props.img} alt="" />
            <div className="user-info">
                <h3>{props.name}</h3>
                <p>{props.job}</p>
                <p>{props.gender}</p>
            </div>
        </div>
    );
};

export default UserItem;
