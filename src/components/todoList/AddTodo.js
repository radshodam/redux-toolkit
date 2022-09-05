import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos, addTod } from "../../features/todos/todosSlice";

function AddTodo() {
  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  return (
    <div>
      <div className="-space-y-px rounded-md shadow-sm isolate">
        <div className="relative px-3 my-2 shadow-md py-2 border border-gray-100 rounded-md rounded-b-none focus-within:z-10 focus-within:border-indigo-300 focus-within:ring-1 focus-within:ring-indigo-300">
          <label
            htmlFor="title"
            className="block text-md font-light text-white"
          >
            title:
          </label>
          <input
            onChange={(e) => setTitleValue(e.target.value)}
            type="text"
            name="title"
            id="title"
            className="block w-full p-1 text-gray-700 placeholder-gray-500 border-0 sm:text-sm my-2 rounded-md"
            placeholder="Add title todo"
          />
        </div>
        <div className="relative px-3 py-2 shadow-lg border border-gray-100 rounded-md rounded-t-none focus-within:z-10 focus-within:border-indigo-300 focus-within:ring-1 focus-within:ring-indigo-300">
          <label
            htmlFor="job-title"
            className="block text-md font-light text-white"
          >
            description:
          </label>
          <input
            onChange={(e) => setDescriptionValue(e.target.value)}
            type="text"
            name="description"
            id="description"
            className="block w-full p-1 text-gray-700 placeholder-gray-500 border-0 sm:text-sm my-2 rounded-md"
            placeholder="add description"
          />
        </div>
      </div>
      <div className="flex justify-center py-2">
        <button
          type="button"
          className="py-1.5 text-xl text-white px-6 my-3 mx-auto border border-gray-300 bg-gradient-to-t hover:shadow-sm from-gray-500 to-sky-500  rounded-md "
          onClick={() =>
            dispatch(
              addAsyncTodos({ title: titleValue, description: descriptionValue })
            )
          }
        >
          add Todo
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
