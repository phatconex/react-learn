import React, { useState, useEffect } from "react";
const Hackernews = () => {
    const [query, setQuery] = useState();
    const [hits, setHints] = useState([]);
    const handleUpdateQuery = (e) => {
        setQuery(e.target.value);
    };
    const fetchApi = async () => {
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
        const data = await res.json();
        setHints(data.hits || []);
    };
    useEffect(() => {
        fetchApi();
    }, [query]);
    console.log(hits);

    return (
        <div>
            <div className="shadow w-1/2 mx-auto my-10 p-5 rounded-xl">
                <h2 className="mb-3 font-semibold text-blue-600 text-xl">HACKER NEWS</h2>
                <input className="w-full block border p-3 rounded-xl mb-5" type="text" onChange={handleUpdateQuery} />
                {hits.length === 0 && <h3>No result</h3>}
                {hits.length > 0 &&
                    hits.map((item, index) => (
                        <h3 key={index} className="bg-gray-100 p-2 m-1 rounded-md  inline-block">
                            {item.title ? item.title : item.story_title}
                        </h3>
                    ))}
            </div>
        </div>
    );
};

export default Hackernews;
