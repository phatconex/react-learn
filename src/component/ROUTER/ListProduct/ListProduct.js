import React, { useEffect, useState } from "react";
import Card from "./Card";
import useFetchData from "./useFetchData";
const ListProduct = () => {
    const { data: arrayProduct } = useFetchData("https://fakestoreapi.com/products");
    const arrPrice = [
        {
            min: 0,
        },
        {
            min: 0,
            max: 100,
        },
        {
            min: 100,
            max: 200,
        },
        {
            min: 200,
            max: 300,
        },
        {
            min: 300,
            max: 400,
        },
    ];
    const [activeIndex, setActiveIndex] = useState();
    const [listProduct, setListProduct] = useState([]);
    const handlePrice = (index, min, max) => {
        setActiveIndex(index);
        if (max) {
            const filterProduct = arrayProduct.filter((item) => item.price > min && item.price < max);
            setListProduct(filterProduct);
        } else {
            setListProduct(arrayProduct);
        }
    };
    useEffect(() => {
        if (arrayProduct) {
            setListProduct(arrayProduct);
        }
    }, [arrayProduct]);
    return (
        <div className="page-list">
            <div className="list-filter">
                <ul>
                    {arrPrice.map((item, index) => (
                        <li key={index} className={index === activeIndex && "active"} onClick={() => handlePrice(index, item.min, item.max)}>
                            {`${item.max ? item.min + " $ - " + item.max + " $" : "ALL"}`}
                        </li>
                    ))}
                </ul>
            </div>
            <div class="list-fruit">
                {listProduct.map((item, index) => (
                    <Card key={index} index={index} id={item.id} img={item.image} name={item.title} price={item.price}></Card>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
