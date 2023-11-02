import React from "react";

const YoutubeItem = (props) => {
    return (
        <div className={`youtube-card ${props.className}`}>
            <img className="thumb" src={props.thumb} alt="" />
            <div className="content">
                <img className="avatar" src={props.avatar} alt="" />
                <div className="info">
                    <h3 className="title">{props.title}</h3>
                    <p className="name">{props.name}</p>
                </div>
            </div>
        </div>
    );
};

export default YoutubeItem;
