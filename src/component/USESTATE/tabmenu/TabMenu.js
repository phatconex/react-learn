import React, { useState } from "react";
import dataMenu from "./data";
import "./tabmenu.css";
const TabMenu = () => {
    //Dùng map lấy ra hết danh mục và dùng Hàm New Set để loại bỏ phần tử trùng trong mảng
    const allCategories = ["All", ...new Set(dataMenu.map((item) => item.category))];

    const [listMenu, setListMenu] = useState(dataMenu);
    const filterCate = (cate) => {
        if (cate === "All") {
            setListMenu(dataMenu);
        } else {
            setListMenu(dataMenu.filter((item) => item.category === cate));
        }
    };
    return (
        <div>
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>
            </div>
            <div className="btn-container">
                {allCategories.map((category, index) => {
                    return (
                        <button
                            type="button"
                            className="filter-btn"
                            key={index}
                            onClick={() => filterCate(category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
            <div className="section-center">
                {listMenu.map((menuItem) => {
                    const { id, title, img, desc, price, category } = menuItem;
                    return (
                        <div key={id} className="menu-item">
                            <img src={img} alt={title} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <h3>{category}</h3>
                                <p className="item-text">{desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TabMenu;
