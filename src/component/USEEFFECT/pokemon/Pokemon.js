import React, { useState, useEffect } from "react";
import "./Pokemon.css";
const Pokemon = () => {
    const [listPokemon, setListPokemon] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const fetchApi = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}`);
            const data = await res.json();
            setListPokemon(data);
            setLoading(false);
        } catch (error) {
            console.error("Lỗi khi tải joke:", error);
        }
    };
    useEffect(() => {
        fetchApi();
    }, [page]);

    const goToNextPage = () => {
        setPage(page + 20);
    };
    const goToPrevPage = () => {
        if (page > 1) {
            setPage(page - 20);
        }
    };
    return (
        <div>
            <h1>
                <span className="poke">PoKeMon</span> <span className="home">HOME</span>
            </h1>
            <div className={`loading ${loading && "active"}`}></div>
            <div className="pokemonList">
                {listPokemon.results &&
                    listPokemon.results.map((item, index) => (
                        <div key={index} className="cardPokemon">
                            <h3>{item.name}</h3>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                    index + 1 + page
                                }.png`}
                                alt=""
                            />
                        </div>
                    ))}
            </div>
            <div className="pagination">
                <div className="prev" onClick={goToPrevPage}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className="next" onClick={goToNextPage}>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
