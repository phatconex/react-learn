import React, { useState, useEffect } from "react";

const Cart = ({ onAddCart }) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(existingCart);
    }, []);
    const handleChangeCart = (itemId, type) => {
        const findIndexItem = cartItems.findIndex((item) => item.id === itemId);
        const updateCart = [...cartItems];
        if (type === "plus") {
            updateCart[findIndexItem].quantity += 1;
        } else if (type === "minus") {
            if (updateCart[findIndexItem].quantity > 1) {
                updateCart[findIndexItem].quantity -= 1;
            }
        } else {
            updateCart.splice(findIndexItem, 1);
        }
        setCartItems(updateCart);
        localStorage.setItem("cart", JSON.stringify(updateCart));
        onAddCart(updateCart);
    };
    return (
        <div className="box-cart">
            <div className="list-cart">
                {cartItems.map((item) => (
                    <div className="cart-item">
                        <div className="item_img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="item_content">
                            <div className="content_top">
                                <div className="info">
                                    <h3 className="title">{item.name}</h3>
                                </div>
                                <div className="delete">
                                    <a type="delete" href="javascript:;" onClick={() => handleChangeCart(item.id, "delete")}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="content_bot">
                                <div className="left">
                                    <span>Quanlity: </span>
                                    <div className="quantity">
                                        <span type="minus" onClick={() => handleChangeCart(item.id, "minus")}>
                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                        </span>
                                        <input type="text" name="quantity" value={item.quantity} disabled />
                                        <span type="plus" onClick={() => handleChangeCart(item.id, "plus")}>
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="price">
                                    <span>{item.price * item.quantity} $</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="s_total">
                <div className="info">
                    <div>Total</div>
                    <div className="total">
                        <span>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span> $
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
