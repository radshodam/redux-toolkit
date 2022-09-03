import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTod } from "../../features/todos/todosSlice";

function AddTodo() {
  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  return (
    <div>
      <div className="-space-y-px rounded-md shadow-sm isolate">
        <div className="relative px-3 py-2 border border-gray-300 rounded-md rounded-b-none focus-within:z-10 focus-within:border-indigo-300 focus-within:ring-1 focus-within:ring-indigo-300">
          <label
            htmlFor="title"
            className="block text-sm font-light text-gray-900"
          >
            title:
          </label>
          <input
            onChange={(e) => setTitleValue(e.target.value)}
            type="text"
            name="title"
            id="title"
            className="block w-full p-1 text-gray-700 placeholder-gray-500 border-0 sm:text-sm"
            placeholder="Add title todo"
          />
        </div>
        <div className="relative px-3 py-2 border border-gray-300 rounded-md rounded-t-none focus-within:z-10 focus-within:border-indigo-300 focus-within:ring-1 focus-within:ring-indigo-300">
          <label
            htmlFor="job-title"
            className="block text-sm font-light text-gray-900"
          >
            description:
          </label>
          <input
            onChange={(e) => setDescriptionValue(e.target.value)}
            type="text"
            name="description"
            id="description"
            className="block w-full p-1 text-gray-700 placeholder-gray-500 border-0 sm:text-sm"
            placeholder="add description"
          />
        </div>
      </div>
      <div className="flex justify-center py-2">
        <button
          type="button"
          className="p-1 mx-auto bg-green-200 rounded-lg"
          onClick={() =>
            dispatch(
              addTod({ title: titleValue, description: descriptionValue })
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
