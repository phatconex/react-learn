import React from "react";
import "./AddToCart.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ListProduct from "./ListProduct";
const AddToCart = () => {
    return (
        <>
            <Header></Header>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<ListProduct />}></Route>
                <Route path="/search/:slug" element={<ListProduct />}></Route>
            </Routes>
        </>
    );
};

export default AddToCart;
