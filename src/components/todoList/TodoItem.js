import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, toggleTodos } from "../../features/todos/todosSlice";

function TodoItem({ id, title, description, completed, index }) {
  const dispatch = useDispatch();
  return (
    <div key={id} className="relative flex items-start py-4">
      <div className="flex-1 min-w-0 text-sm">
        <label className="font-medium text-gray-700 select-none">
          <span className="px-2">{`${index} - `}</span>
          {title}
        </label>
        <p className="text-sm text-gray-500 pl-2.5">{description}</p>
      </div>
      <div className="flex items-center h-5 ml-3 ">
        <input
          onChange={() => dispatch(toggleTodos({id:id}))}
          checked={completed}
          type="checkbox"
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center justify-center mx-1">
        <button type="button" className="px-2 text-sm bg-red-400 rounded-md" onClick={() =>dispatch(deleteTodos({id}))}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;
