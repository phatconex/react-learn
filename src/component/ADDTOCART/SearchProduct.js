import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "./CardProduct";
import useFetch from "./useFetch";
const SearchProduct = () => {
    const { data: arrProduct } = useFetch(`https://fakestoreapi.com/products`);
    const [searchProduct, setSearchProduct] = useState();
    const { slug } = useParams();
    useEffect(() => {
        const arrSearch = arrProduct.filter((item) => item.title.toLowerCase().includes(slug.toLowerCase()));
        setSearchProduct(arrSearch);
    }, [arrProduct, slug]);

    return (
        <div className="page-list">
            <div className="list-fruit">
                {searchProduct &&
                    searchProduct.map((item) => (
                        <CardProduct key={item.id} id={item.id} image={item.image} price={item.price} title={item.title}></CardProduct>
                    ))}
            </div>
        </div>
    );
};

export default SearchProduct;
