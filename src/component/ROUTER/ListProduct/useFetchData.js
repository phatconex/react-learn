import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAPi = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPi();
    }, [url]);
    return { data };
};

export default useFetchData;
