import React, { useState } from "react";
import "./review.css";
import people from "./data";
const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const nextPerson = () => {
        let newIndex = index + 1;
        if (newIndex > people.length - 1) {
            newIndex = 0;
        }
        setIndex(newIndex);
    };
    const prevPerson = () => {
        let newIndex = index - 1;
        if (newIndex < 0) {
            newIndex = people.length - 1;
        }
        setIndex(newIndex);
    };
    const randomPerson = () => {
        let newIndex = Math.floor(Math.random() * people.length);
        setIndex(newIndex);
    };
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <i class="fa-solid fa-quote-right"></i>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
                surprise me
            </button>
        </article>
    );
};

export default Review;
