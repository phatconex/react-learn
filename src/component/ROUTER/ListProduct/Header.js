import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Header = ({ countCart }) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/search/${search}`);
        setSearch("");
    };
    return (
        <div>
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
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>{countCart}</span>
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
