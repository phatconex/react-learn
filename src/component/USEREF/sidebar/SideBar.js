import React, { useRef, useEffect, useState } from "react";
import "./sidebar.css";
const SideBar = () => {
    const sidebarRef = useRef();
    const iconRef = useRef();
    const [sidebar, setSidebar] = useState(false);
    useEffect(() => {
        const handleClickOut = (e) => {
            console.log(sidebarRef.current.contains(e.target));
            console.log(iconRef.current.contains(e.target));
            if (!sidebarRef.current.contains(e.target)) {
                if (!iconRef.current.contains(e.target)) {
                    setSidebar(false);
                } else {
                    setSidebar(true);
                }
            }
        };
        document.addEventListener("click", handleClickOut);
        return () => {
            document.removeEventListener("click", handleClickOut);
        };
    }, []);
    return (
        <div>
            <div ref={iconRef} className="icon">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div ref={sidebarRef} className={`sidebar ${sidebar && "active"}`}>
                <i className="fa-solid fa-xmark" onClick={() => setSidebar(false)}></i>
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
