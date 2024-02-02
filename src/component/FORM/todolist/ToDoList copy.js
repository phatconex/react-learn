import React, { useEffect, useState } from "react";

const ToDoList = () => {
    const [form, setForm] = useState({
        title: "",
        desc: "",
    });
    const [isCompletedScreen, setIsCompletedScreen] = useState(false);
    const [todos, setToDos] = useState([]);
    const [completeToDos, setCompleteToDos] = useState([]);
    const handleChangeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        setToDos(localStorage.getItem("LIST_TODO") ? JSON.parse(localStorage.getItem("LIST_TODO")) : []);
        setCompleteToDos(localStorage.getItem("LIST_COMPLETETODO") ? JSON.parse(localStorage.getItem("LIST_COMPLETETODO")) : []);
    }, []);
    const handleAddToDo = () => {
        const newToDos = [...todos];
        newToDos.push(form);
        localStorage.setItem("LIST_TODO", JSON.stringify(newToDos));
        setToDos(newToDos);
        setForm({
            title: "",
            desc: "",
        });
    };
    const handleDelete = (index) => {
        const currentToDos = [...todos];
        currentToDos.splice(index, 1);
        localStorage.setItem("LIST_TODO", JSON.stringify(currentToDos));
        setToDos(currentToDos);
    };
    const handleComplete = (index) => {
        const date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hh = date.getHours();
        var minutes = date.getMinutes();
        var ss = date.getSeconds();
        var finalDate = dd + "-" + mm + "-" + yyyy + " at " + hh + ":" + minutes + ":" + ss;

        const currentCompleteToDos = [...completeToDos];
        const newCompleteToDo = {
            ...todos[index],
            completedOn: finalDate,
        };
        currentCompleteToDos.push(newCompleteToDo);
        localStorage.setItem("LIST_COMPLETETODO", JSON.stringify(currentCompleteToDos));
        setCompleteToDos(currentCompleteToDos);
        handleDelete(index);
    };
    console.log(completeToDos);

    return (
        <div className="bg-blue-950 p-10 w-1/2 m-auto text-white mt-10 rounded-xl">
            <h1 className="text-center text-3xl font-bold mb-5">My Todos</h1>
            <div className="flex gap-3 items-end">
                <div className="w-2/5">
                    <label htmlFor="title" className="block mb-2 font-medium">
                        Title:
                    </label>
                    <input
                        className="py-2 ps-3 w-full rounded  text-black outline-none"
                        type="text"
                        value={form.title}
                        placeholder="What's the title?"
                        name="title"
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="w-2/5">
                    <label htmlFor="title" className="block mb-2 font-medium">
                        Descriptions:
                    </label>
                    <input
                        className="py-2 ps-3 w-full rounded  text-black outline-none"
                        type="text"
                        placeholder="What's the descriptions?"
                        name="desc"
                        value={form.desc}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="w-1/5">
                    <button className="w-full bg-red-600 pt-2 pb-3 rounded font-bold border-none" onClick={handleAddToDo}>
                        ADD
                    </button>
                </div>
            </div>
            <div className="border-t mt-7 pt-7 border-blue-900">
                <div>
                    <button
                        className={`py-2 px-5 bg-blue-900 mr-2 rounded ${!isCompletedScreen && "bg-red-600"}`}
                        onClick={() => setIsCompletedScreen(false)}
                    >
                        To do
                    </button>
                    <button
                        className={`py-2 px-5 bg-blue-900 mr-2 rounded ${isCompletedScreen && "bg-red-600"}`}
                        onClick={() => setIsCompletedScreen(true)}
                    >
                        Complete
                    </button>
                </div>
                {!isCompletedScreen && (
                    <div>
                        {todos.map((item, index) => (
                            <div key={index} className="flex justify-between bg-blue-900 mt-9 p-8 rounded items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="font-light opacity-90">{item.desc}</p>
                                </div>
                                <div>
                                    <button className="text-3xl" onClick={() => handleDelete(index)}>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                    <button className="text-3xl ms-10 text-blue-300" onClick={() => handleComplete(index)}>
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {isCompletedScreen && (
                    <div>
                        {completeToDos.map((item, index) => (
                            <div key={index} className="flex justify-between bg-blue-900 mt-9 p-8 rounded items-center">
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
