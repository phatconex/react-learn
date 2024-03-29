import React, { useEffect, useState } from "react";

const ToDoList = () => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [form, setForm] = useState({
        title: "",
        desc: "",
    });
    const [todo, setToDo] = useState(localStorage.getItem("LIST_TODO") ? JSON.parse(localStorage.getItem("LIST_TODO")) : []);
    const [completeToDo, setCompleteToDo] = useState(
        localStorage.getItem("LIST_COMPLETETODO") ? JSON.parse(localStorage.getItem("LIST_COMPLETETODO")) : []
    );
    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleAddToDo = () => {
        const newToDo = [...todo];
        newToDo.push(form);
        localStorage.setItem("LIST_TODO", JSON.stringify(newToDo));
        setToDo(newToDo);
        setForm({
            title: "",
            desc: "",
        });
    };
    const handleDeleteToDo = (index) => {
        const currentToDos = [...todo];
        currentToDos.splice(index, 1);
        localStorage.setItem("LIST_TODO", JSON.stringify(currentToDos));
        setToDo(currentToDos);
    };
    const handleCompleteToDo = (index) => {
        const now = new Date();
        const finishTime = `${now.getDate()} / ${
            now.getMonth() + 1
        } / ${now.getFullYear()} at ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
        const currentCompleteToDo = [...completeToDo];
        const newCompleteToDo = {
            ...todo[index],
            completedOn: finishTime,
        };
        currentCompleteToDo.push(newCompleteToDo);
        localStorage.setItem("LIST_COMPLETETODO", JSON.stringify(currentCompleteToDo));
        setCompleteToDo(currentCompleteToDo);
        handleDeleteToDo(index);
    };
    return (
        <div className="bg-blue-950 p-10 w-1/2 m-auto text-white mt-10 rounded-xl">
            <h1 className="text-center text-3xl font-bold mb-5">My Todos</h1>
            <div className="flex gap-3 items-end">
                <div className="w-2/5">
                    <label htmlFor="title" className="block mb-2 font-medium">
                        Title:
                    </label>
                    <input
                        value={form.title}
                        onChange={handleInput}
                        className="py-2 ps-3 w-full rounded  text-black outline-none"
                        type="text"
                        placeholder="What's the title?"
                        name="title"
                    />
                </div>
                <div className="w-2/5">
                    <label htmlFor="title" className="block mb-2 font-medium">
                        Descriptions:
                    </label>
                    <input
                        value={form.desc}
                        onChange={handleInput}
                        className="py-2 ps-3 w-full rounded  text-black outline-none"
                        type="text"
                        placeholder="What's the descriptions?"
                        name="desc"
                    />
                </div>
                <div className="w-1/5">
                    <button onClick={handleAddToDo} className="w-full bg-red-600 pt-2 pb-3 rounded font-bold border-none">
                        ADD
                    </button>
                </div>
            </div>
            <div className="border-t mt-7 pt-7 border-blue-900">
                <div>
                    <button className={`py-2 px-5 ${isCompleted ? "bg-blue-900" : "bg-red-600"} mr-2 rounded`} onClick={() => setIsCompleted(false)}>
                        To do
                    </button>
                    <button className={`py-2 px-5 ${isCompleted ? "bg-red-600" : "bg-blue-900"} mr-2 rounded`} onClick={() => setIsCompleted(true)}>
                        Complete
                    </button>
                </div>
                {!isCompleted ? (
                    <div>
                        {todo.map((item, index) => (
                            <div key={index} className="flex justify-between bg-blue-900 mt-9 p-8 rounded items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="font-light opacity-90">{item.desc}</p>
                                </div>
                                <div>
                                    <button className="text-3xl" onClick={() => handleDeleteToDo(index)}>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                    <button className="text-3xl ms-10 text-blue-300" onClick={() => handleCompleteToDo(index)}>
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        {completeToDo.map((item, index) => (
                            <div className="flex justify-between bg-blue-900 mt-9 p-8 rounded items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="font-light opacity-90">{item.desc}</p>
                                    <p className="font-light opacity-90">
                                        <span className="font-semibold">Completed at: </span>
                                        {item.completedOn}
                                    </p>
                                </div>
                                <div>
                                    <button className="text-3xl">
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ToDoList;
