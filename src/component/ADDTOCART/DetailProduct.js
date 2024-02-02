import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./cartContext";
import useFetch from "./useFetch";
import { toast } from "react-toastify";
const DetailProduct = () => {
    const { slug } = useParams();
    const { data: productDetail } = useFetch(`https://fakestoreapi.com/products/${slug}`);
    const { addToCart } = useCart();
    const handleAddCart = () => {
        toast.success("Success add to cart !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        });
        addToCart(productDetail);
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
