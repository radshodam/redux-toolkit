import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleAsyncTodos, deleteAsyncTodos } from "../../features/todos/todosSlice";

function TodoItem({ id, title, description, completed, index }) {
  const dispatch = useDispatch();
  return (
    <div key={id} className="relative flex items-start py-4 ">
      <div className="flex-1 min-w-0 text-sm">
        <label className="font-medium text-gray-100 select-none">
          <span className="px-2">{`${index} - `}</span>
          {title}
        </label>
        <p className="text-sm text-gray-200 pl-2.5">{description}</p>
      </div>
      <div className="flex items-center h-5 ml-3 ">
        <input
          onChange={() => dispatch(toggleAsyncTodos({ id: id , completed: !completed}))}
          checked={completed}
          type="checkbox"
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center justify-center mx-1">
        <button
          type="button"
          className="w-4 text-md text-red-500 hover:text-red-900"
          onClick={() => dispatch(deleteAsyncTodos({ id }))}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
