import React from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    console.log(useParams());
    return (
        <div>
            <h1>Product detail</h1>
        </div>
    );
};

export default ProductDetail;
