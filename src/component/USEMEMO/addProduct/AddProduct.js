import React, { useRef, useState, useMemo } from "react";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    const handleAddProduct = () => {
        setProducts([
            ...products,
            {
                name,
                price,
            },
        ]);
    };
    const total = useMemo(() => {
        const result = products.reduce((result, product) => {
            return result + Number(product.price);
        }, 0);
        return result;
    }, [products]);
    return (
        <div className="border border-2 border-gray-500 rounded w-4/12 m-auto my-20 p-10">
            <h3 className="mb-3 font-medium text-xl">SIMPLE CALCUTATE PRODUCT</h3>
            <input
                type="text"
                placeholder="Product name"
                className="w-full p-3 border border-gray-400 outline-none mb-5"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Product price"
                className="w-full p-3 border border-gray-400 outline-none mb-5"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button className="w-full bg-black text-white p-3 mb-5" onClick={handleAddProduct}>
                ADD PRODUCT
            </button>
            <div className="bg-gray-200 p-3 mb-5">
                TOTAL PRICE: <span className="font-bold">{total}</span> $
            </div>
            <ul>
                {products.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddProduct;
