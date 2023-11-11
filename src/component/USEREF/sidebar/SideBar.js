import React, { useRef, useEffect, useState } from "react";
import "./sidebar.css";
const SideBar = () => {
    const sideBarRef = useRef();
    const [showSideBar, setShowSideBar] = useState(false);
    useEffect(() => {
        function handleClickOut(e) {
            if (!sideBarRef.current.contains(e.target)) {
                setShowSideBar(false);
            }
        }
        document.addEventListener("click", handleClickOut);
        return () => {
            document.removeEventListener("click", handleClickOut);
        };
    }, []);
    return (
        <div ref={sideBarRef}>
            <div className="icon" onClick={() => setShowSideBar(!showSideBar)}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className={`sidebar ${showSideBar && "active"}`}>
                <i className="fa-solid fa-xmark" onClick={() => setShowSideBar(false)}></i>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Product</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
