import React, { useEffect, useState } from "react";
import "./RandomJoke.css";

const RandomJoke = () => {
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchApi = async () => {
        try {
            setLoading(true);
            const res = await fetch(
                "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
            );
            const data = await res.json();
            setJoke(data);
            setLoading(false);
        } catch (error) {
            console.error("Lỗi khi tải joke:", error);
        }
    };
    useEffect(() => {
        fetchApi();
    }, []);
    return (
        <div className="joke">
            <span>&#128514;</span>
            <h1>{joke.joke}</h1>
            <button className={`joke-button ${loading && "active"}`} onClick={fetchApi}>
                <div className="loading"></div>
                <span>Get random joke</span>
            </button>
        </div>
    );
};

export default RandomJoke;
