import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  // input value
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <h1 className="w-full pt-10 text-2xl text-center text-green-400">
        {count}
      </h1>
      <div className="flex justify-center w-full py-6">
        <span className="inline-flex rounded-md shadow-sm isolate">
          {/* //?by payload type Number*/}
          <button
            type="button"
            onClick={() => dispatch(decrement(Number(inputValue) | 1))}
            className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {`-`}
          </button>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="w-20 text-2xl text-center text-gray-600 border "
          />
          {/*//? without payload */}
          <button
            type="button"
            onClick={() => dispatch(increment())}
            className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {`+`}
          </button>
        </span>
      </div>
    </>
  );
}
