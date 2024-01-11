import React, { useState, useEffect } from "react";
import "./ScrollEffect.css";
const ScrollEffect = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="scroll-effect">
            <div className="content">SCROLL EFFECT</div>
            <button className={isVisible && "active"} onClick={scrollToTop}>
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default ScrollEffect;
