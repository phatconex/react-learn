import React, { useState } from "react";

const ToDoList = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [todos, setToDos] = useState(
        localStorage.getItem("TODOLIST") ? JSON.parse(localStorage.getItem("TODOLIST")) : []
    );
    const [isCompletedScreen, setIsCompletedScreen] = useState(false);
    const [completedTodos, setCompletedTodos] = useState(
        localStorage.getItem("COMPLETE_TODOS")
            ? JSON.parse(localStorage.getItem("COMPLETE_TODOS"))
            : []
    );

    const handleAddToDo = () => {
        const todo = {
            title,
            desc,
        };
        const newToDo = [...todos];
        newToDo.push(todo);
        setToDos(newToDo);

        localStorage.setItem("TODOLIST", JSON.stringify(newToDo));

        setTitle("");
        setDesc("");
    };
    const handleDeleteTodo = (index) => {
        const reduceToDo = [...todos];
        reduceToDo.splice(index, 1);
        setToDos(reduceToDo);
        localStorage.setItem("TODOLIST", JSON.stringify(reduceToDo));
    };
    const handleUpdateTodo = (index) => {
        const date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hh = date.getHours();
        var minutes = date.getMinutes();
        var ss = date.getSeconds();
        var finalDate = dd + "-" + mm + "-" + yyyy + " at " + hh + ":" + minutes + ":" + ss;

        let filteredTodo = {
            ...todos[index],
            completedOn: finalDate,
        };
        let updatedCompletedList = [...completedTodos, filteredTodo];
        setCompletedTodos(updatedCompletedList);
        localStorage.setItem("COMPLETE_TODOS", JSON.stringify(updatedCompletedList));
        handleDeleteTodo(index);
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
                        className="py-2 ps-3 w-full rounded  text-black outline-none"
                        type="text"
                        placeholder="What's the title?"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className="w-1/5">
                    <button
                        onClick={handleAddToDo}
                        className="w-full bg-red-600 pt-2 pb-3 rounded font-bold border-none"
                    >
                        ADD
                    </button>
                </div>
            </div>
            <div className="border-t mt-7 pt-7 border-blue-900">
                <div>
                    <button
                        className={`py-2 px-5 bg-blue-900 mr-2 rounded ${
                            isCompletedScreen === false && "bg-red-600"
                        }`}
                        onClick={() => setIsCompletedScreen(false)}
                    >
                        To do
                    </button>
                    <button
                        className={`py-2 px-5 bg-blue-900 mr-2 rounded ${
                            isCompletedScreen === true && "bg-red-600"
                        }`}
                        onClick={() => setIsCompletedScreen(true)}
                    >
                        Complete
                    </button>
                </div>
                {isCompletedScreen === false && (
                    <div>
                        {todos.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between bg-blue-900 mt-9 p-8 rounded items-center"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="font-light opacity-90">{item.desc}</p>
                                </div>
                                <div>
                                    <button
                                        className="text-3xl"
                                        onClick={() => handleDeleteTodo(index)}
                                    >
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                    <button
                                        className="text-3xl ms-10 text-blue-300"
                                        onClick={() => handleUpdateTodo(index)}
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {isCompletedScreen && (
                    <div>
                        {completedTodos.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between bg-blue-900 mt-9 p-8 rounded items-center"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="font-light opacity-90">{item.desc}</p>
                                    <p className="font-light opacity-90">
                                        <span className="font-semibold">Completed at: </span>
                                        {item.completedOn}
                                    </p>
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
