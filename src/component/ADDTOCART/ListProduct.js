import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "./CardProduct";
const ListProduct = () => {
    const [arrProduct, setArrProduct] = useState();
    const [filterProduct, setFilterProduct] = useState();
    const [tab, setTab] = useState(0);
    const { slug } = useParams();
    console.log(slug);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();
            setArrProduct(data);
            setFilterProduct(data);
        };
        fetchApi();
    }, []);
    const handleFilter = (minPrice, maxPrice, tab) => {
        setTab(tab);
        if (!minPrice && !maxPrice) {
            setFilterProduct(arrProduct);
        } else {
            const filterProduct = arrProduct.filter((item) => item.price >= minPrice && item.price <= maxPrice);
            setFilterProduct(filterProduct);
        }
    };
    return (
        <div className="page-list">
            <div className="list-filter">
                <ul>
                    <li className={tab === 0 ? "active" : ""} onClick={() => handleFilter(null, null, 0)}>
                        ALL
                    </li>
                    <li className={tab === 1 ? "active" : ""} onClick={() => handleFilter(0, 100, 1)}>
                        From 0 - 100$
                    </li>
                    <li className={tab === 2 ? "active" : ""} onClick={() => handleFilter(100, 200, 2)}>
                        From 100$ - 200$
                    </li>
                    <li className={tab === 3 ? "active" : ""} onClick={() => handleFilter(200, 300, 3)}>
                        From 200$ - 300$
                    </li>
                    <li className={tab === 4 ? "active" : ""} onClick={() => handleFilter(500, 1000, 4)}>
                        From 500$ - 1000$
                    </li>
                </ul>
            </div>
            <div className="list-fruit">
                {filterProduct &&
                    filterProduct.map((item) => (
                        <CardProduct key={item.id} id={item.id} img={item.image} price={item.price} title={item.title}></CardProduct>
                    ))}
            </div>
        </div>
    );
};

export default ListProduct;
