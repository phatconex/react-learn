import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const fetchApi = async (page) => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Lỗi khi gọi API Picsum");
        }
    } catch (error) {
        console.error("Lỗi khi gọi API Picsum:", error);
        throw error;
    }
};
const Photos = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const handlePage = () => {
        setPage(page + 1);
    };
    useEffect(() => {
        const getPhotos = async () => {
            const data = await fetchApi(page);
            setImages((prevImages) => [...prevImages, ...data]);
        };
        getPhotos();
    }, [page]);
    return (
        <div>
            <div className="grid grid-cols-4 gap-5 m-10">
                {images.length > 0 &&
                    images.map((img) => (
                        <div key={img.id} className="shadow p-5 rounded">
                            <img
                                className=" h-[300px] object-cover"
                                src={img.download_url}
                                alt={img.author}
                            />
                        </div>
                    ))}
            </div>
            <div className="text-center">
                <button onClick={handlePage} className="bg-gray-100 py-3 px-10 rounded-3xl">
                    Show more
                </button>
            </div>
        </div>
    );
};

export default Photos;
