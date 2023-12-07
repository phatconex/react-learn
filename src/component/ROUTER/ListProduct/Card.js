import React from "react";
import { Link } from "react-router-dom";
const Card = ({ img, name, price, index, id }) => {
    return (
        <Link key={index} to={`/product/${id}`} className="card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{price} $</p>
        </Link>
    );
};

export default Card;
