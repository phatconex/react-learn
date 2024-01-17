import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToCart from "./component/ADDTOCART/AddToCart";
import { CartProvider } from "./component/ADDTOCART/cartContext";
import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(10);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            console.log("a");
        }, 1000);

        // Cleanup interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <ToastContainer />
            {/* <CartProvider>
                <AddToCart></AddToCart>
            </CartProvider> */}

            <h1>{count}</h1>
        </>
    );
}

export default App;
