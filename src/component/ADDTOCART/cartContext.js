import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem("LIST_CART") ? JSON.parse(localStorage.getItem("LIST_CART")) : []);
    const addToCart = (product) => {
        const newCart = [...cart];
        const findIndex = newCart.findIndex((item) => item.id === product.id);
        if (findIndex < 0) {
            product.quantity = 1;
            newCart.push(product);
        } else {
            newCart[findIndex].quantity++;
        }
        setCart(newCart);
    };
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };
    useEffect(() => {
        localStorage.setItem("LIST_CART", JSON.stringify(cart));
    }, [cart]);

    const value = {
        cart,
        addToCart,
        removeFromCart,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
const useCart = () => {
    const context = useContext(CartContext);
    return context;
};
export { CartProvider, useCart };
