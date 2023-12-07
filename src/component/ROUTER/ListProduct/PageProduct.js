import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./Page.css";
import Home from "./Home";
import Header from "./Header";
import ListProduct from "./ListProduct";
import DetailProduct from "./DetailProduct";
import SearchProduct from "./SearchProduct";
import Cart from "./Cart";
const PageProduct = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(existingCart);
    }, []);
    const handleAddCart = (cartDetail) => {
        setCart(cartDetail);
    };
    return (
        <div>
            <Header countCart={cart.length}></Header>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<ListProduct />}></Route>
                <Route path="/cart" element={<Cart onAddCart={handleAddCart} />}></Route>
                <Route path="/search/:slug" element={<SearchProduct />}></Route>
                <Route path="/product/:slug" element={<DetailProduct onAddCart={handleAddCart} />}></Route>
            </Routes>
        </div>
    );
};

export default PageProduct;
