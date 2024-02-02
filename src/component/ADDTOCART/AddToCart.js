import React from "react";
import "./AddToCart.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ListProduct from "./ListProduct";
import SearchProduct from "./SearchProduct";
import DetailProduct from "./DetailProduct";
import Cart from "./Cart";
const AddToCart = () => {
    return (
        <>
            <Header></Header>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<ListProduct />}></Route>
                <Route path="/search/:slug" element={<SearchProduct />}></Route>
                <Route path="/product/:slug" element={<DetailProduct />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </>
    );
};

export default AddToCart;
