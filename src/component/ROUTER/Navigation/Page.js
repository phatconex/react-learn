import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./component/ROUTER/Navigation/Home";
import Product from "./component/ROUTER/Navigation/Product";
import Detail from "./component/ROUTER/Navigation/Detail";
import ProductDetail from "./component/ROUTER/Navigation/ProductDetail";

const Page = () => {
    return (
        <div>
            <nav>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/product">
                    Product
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/detail">
                    Detail
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/product/:slug" element={<ProductDetail />}></Route>
                <Route path="/detail" element={<Detail />}></Route>
                <Route path="*" element={<h1>404 Not found</h1>}></Route>
            </Routes>
        </div>
    );
};

export default Page;
