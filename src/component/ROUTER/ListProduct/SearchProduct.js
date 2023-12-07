import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import useFetchData from "./useFetchData";
const SearchProduct = () => {
    const { slug } = useParams();
    const { data: arrayProduct } = useFetchData("https://fakestoreapi.com/products");
    const searchProduct = arrayProduct.filter((item) => item.title.toLowerCase().includes(slug.toLowerCase()));
    return (
        <div>
            <h1>Search key: {slug}</h1>
            <div class="list-fruit">
                {searchProduct.map((item, index) => (
                    <Card index={index} id={item.id} img={item.image} name={item.title} price={item.price}></Card>
                ))}
            </div>
        </div>
    );
};

export default SearchProduct;
