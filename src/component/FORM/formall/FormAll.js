import React, { useState } from "react";

const FormAll = () => {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        date: "",
        job: "",
        gender: "",
    });
    const [hobby, setHobby] = useState([]);
    const [submit, setSubmit] = useState();
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setHobby([...hobby, e.target.value]);
        } else {
            setHobby(hobby.filter((item) => item !== e.target.value));
        }
    };
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleShowInfo = () => {
        setSubmit([form, hobby]);
    };
    return (
        <div className="w-2/6 m-auto mt-10 bg-sky-950 rounded-2xl p-10">
            <div className="mb-7">
                <h1 className="text-white mb-5 text-center text-2xl font-sans font-semibold">
                    SIMPLE FORM
                </h1>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="fullname"
                    placeholder="Username"
                    className="border border-[#ddd] w-full mb-4 p-2 rounded-md outline-none"
                />
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="border border-[#ddd] w-full mb-4 p-2 rounded-md outline-none"
                />
                <input
                    onChange={handleInputChange}
                    type="date"
                    name="date"
                    className="border border-[#ddd] w-full mb-4 p-2 rounded-md outline-none text-gray-400"
                />
                <select
                    onChange={handleInputChange}
                    name="job"
                    className="border border-[#ddd] w-full mb-4 p-2 rounded-md outline-none text-gray-400"
                >
                    <option value="Student">Student</option>
                    <option value="Worker">Worker</option>
                    <option value="Unemployment">Unemployment</option>
                </select>
                <div className="flex text-white gap-5">
                    <div>
                        <input
                            type="checkbox"
                            name="hobby"
                            value="Badminton"
                            onChange={handleCheckboxChange}
                        />
                        <span>Badminton</span>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="hobby"
                            value="Soccer"
                            onChange={handleCheckboxChange}
                        />
                        <span>Soccer</span>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="hobby"
                            value="Dancing"
                            onChange={handleCheckboxChange}
                        />
                        <span>Dancing</span>
                    </div>
                </div>

                <div className="flex text-white gap-5 mt-5">
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={handleInputChange}
                        />
                        <span>Male</span>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={handleInputChange}
                        />
                        <span>Female</span>
                    </div>
                </div>
                <button
                    onClick={handleShowInfo}
                    className="w-full text-center block bg-white mt-5 rounded p-2"
                >
                    Show info
                </button>
            </div>
        </div>
    );
};

export default FormAll;
