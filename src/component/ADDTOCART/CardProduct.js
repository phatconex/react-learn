import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "./cartContext";

const CardProduct = ({ id, image, price, title }) => {
    const { addToCart } = useCart();
    const handleAddCart = () => {
        toast.success("Success add to cart !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        });
        const product = { id, image, price, title };
        addToCart(product);
    };
    return (
        <div className="card">
            <Link to={`/product/${id}`}>
                <img src={image} alt="" />
            </Link>
            <Link to={`/product/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p>{price} $</p>
            <button onClick={handleAddCart}>Add to cart</button>
        </div>
    );
};

export default CardProduct;
