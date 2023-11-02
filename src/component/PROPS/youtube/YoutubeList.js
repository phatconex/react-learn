import React from "react";
import { YoutubeData } from "./data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
    return (
        <div className="youtube-list">
            {props.children}
            {YoutubeData.map((item, index) => (
                <YoutubeItem
                    thumb={item.thumbnail}
                    avatar={item.avatar || item.thumbnail}
                    title={item.title}
                    name={item.channel}
                    className={item.special ? "special" : ""}
                ></YoutubeItem>
            ))}
        </div>
    );
};

export default YoutubeList;
