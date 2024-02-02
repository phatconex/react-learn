import React, { useState, useEffect } from "react";
import { useCart } from "./cartContext";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const [cartItem, setCartItem] = useState(cart);
    const handleChangeCart = (id, type) => {
        const updateCart = [...cartItem];
        const findIDCart = updateCart.findIndex((item) => item.id === id);
        if (type === "plus") {
            updateCart[findIDCart].quantity++;
        } else if (type === "minus") {
            if (updateCart[findIDCart].quantity > 1) {
                updateCart[findIDCart].quantity--;
            }
        } else {
            removeFromCart(id);
        }
        localStorage.setItem("LIST_CART", JSON.stringify(updateCart));
        setCartItem(updateCart);
    };
    useEffect(() => {
        setCartItem(cart);
    }, [cart]);
    return (
        <div className="box-cart">
            <div className="list-cart">
                {cartItem.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <div className="item_img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="item_content">
                            <div className="content_top">
                                <div className="info">
                                    <h3 className="title">{item.title}</h3>
                                </div>
                                <div className="delete">
                                    <button onClick={() => handleChangeCart(item.id, "delete")}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
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
                        <span>{cartItem.reduce((total, item) => total + item.price * item.quantity, 0)}</span> $
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
