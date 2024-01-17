import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./cartContext";
const Header = () => {
    const { cart } = useCart();
    const [search, setSearch] = useState();
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/search/${search}`);
        setSearch("");
    };

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
            </ul>

            <div className="search">
                <input type="text" placeholder="Search product" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <NavLink to="/cart" className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{cart.length}</span>
            </NavLink>
        </nav>
    );
};

export default Header;
