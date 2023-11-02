import React, { useState } from "react";
import "./Weather.css";
const Weather = () => {
    const key = "66c497d8d680005b152af6747ec67bee";
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const fetchApi = async () => {
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
            );
            const data = await res.json();
            setWeather(data);
        } catch (error) {
            console.error("Lỗi khi tải api:", error);
        }
    };
    console.log(weather);
    return (
        <div className="wrapper">
            <div className="container">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter a city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button id="search-btn" onClick={fetchApi}>
                        Search
                    </button>
                </div>
                {weather.weather ? (
                    <div id="result">
                        <h2>{weather.name}</h2>
                        <h4 className="weather">{weather.weather[0].main}</h4>
                        <h4 className="desc">{weather.weather[0].description}</h4>
                        <img
                            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                        />
                        <h1>{weather.main.temp} °</h1>
                        <div className="temp-container">
                            <div>
                                <h4 className="title">min</h4>
                                <h4 className="temp">{weather.main.temp_min}°</h4>
                            </div>
                            <div>
                                <h4 className="title">max</h4>
                                <h4 className="temp">{weather.main.temp_max}°</h4>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>No result</h1>
                )}
            </div>
        </div>
    );
};

export default Weather;
