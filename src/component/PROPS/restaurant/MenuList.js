import React from "react";
import MenuItem from "./MenuItem";
import { listMenu } from "./data";
import "./Menu.css";
const MenuList = () => {
    return (
        <div>
            {listMenu.map((item) => (
                <div key={item.id} className="menuList">
                    <h2>{item.title}</h2>
                    <div className="menuContainer">
                        <div className="menuLeft">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="menuRight">
                            {item.listMenu.map((menu) => (
                                <MenuItem
                                    key={menu.id}
                                    title={menu.title}
                                    price={menu.price}
                                    desc={menu.desc}
                                    choice={menu.choice}
                                ></MenuItem>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
