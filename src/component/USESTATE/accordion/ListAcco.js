import React from "react";
import ItemAcco from "./ItemAcco";
import "./accordion.css";
import questions from "./data";
const ListAcco = () => {
    return (
        <div className="s-faq-1">
            {questions.map((item) => (
                <ItemAcco key={item.id} title={item.title} desc={item.info}></ItemAcco>
            ))}
        </div>
    );
};

export default ListAcco;
