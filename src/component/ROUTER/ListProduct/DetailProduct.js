import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "./useFetchData";
const DetailProduct = ({ onAddCart }) => {
    const { slug } = useParams();
    const { data: productDetail } = useFetchData(`https://fakestoreapi.com/products/${slug}`);
    const handleAddCart = () => {
        const objProduct = {
            id: productDetail.id,
            name: productDetail.title,
            price: productDetail.price,
            img: productDetail.image,
            quantity: 1,
        };
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const findIndexCart = cart.findIndex((item) => item.id === productDetail.id);

        if (findIndexCart >= 0) {
            cart[findIndexCart].quantity += 1;
        } else {
            cart.push(objProduct);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        onAddCart(cart);
    };
    return (
        <div>
            <div className="detail-fruit">
                <div className="img">
                    <img src={productDetail.image} alt={productDetail.title} />
                </div>
                <h1 className="title">{productDetail.title}</h1>
                <p className="desc">{productDetail.description}</p>
                <p className="price">{productDetail.price} $</p>
                <button className="btncart" onClick={handleAddCart}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default DetailProduct;
