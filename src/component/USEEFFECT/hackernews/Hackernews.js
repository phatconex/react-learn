import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
const Hackernews = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState("react");
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState();
    const handleFetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);

            setHits(res.data.hits || []);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setErr(`Api error:${err.message}`);
        }
    };

    const handleUpdateQuery = _.debounce((e) => {
        setQuery(e.target.value);
    }, 500);

    useEffect(() => {
        handleFetchData();
    }, [query]);
    return (
        <div>
            <div className="shadow w-1/2 mx-auto my-10 p-5 rounded-xl">
                <h2 className="mb-3 font-semibold text-blue-600 text-xl">HACKER NEWS</h2>
                <input
                    className="w-full block border p-3 rounded-xl mb-5"
                    type="text"
                    defaultValue={query}
                    onChange={handleUpdateQuery}
                />
                {loading && (
                    <div className="w-8 h-8 rounded-full border-4 border-blue-500 border-r-transparent animate-spin"></div>
                )}
                {err && <h3>{err}</h3>}
                {!loading &&
                    hits.length > 0 &&
                    hits.map((item) => (
                        <h3
                            className="bg-gray-100 p-2 m-1 rounded-md  inline-block"
                            key={item.title}
                        >
                            {item.title}
                        </h3>
                    ))}
            </div>
        </div>
    );
};

export default Hackernews;
