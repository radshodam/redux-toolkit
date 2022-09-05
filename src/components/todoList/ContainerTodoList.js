import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../../features/todos/todosSlice";
import AddTodo from "./AddTodo";
import AllCompleted from "./AllCompleted";
import TodoItem from "./TodoItem";

function ContainerTodoList() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  console.log("dd", todos);
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <>
      <div className="flex justify-center py-10">
        <div className="container max-w-lg ">
          <div>
            <AddTodo />
          </div>
          <fieldset>
            {todos.map((todo, index) => {
              console.log("todo", todo);
              return (
                <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200 ">
                  <TodoItem id={todo.id} {...todo} index={index} />
                </div>
              );
            })}
          </fieldset>
        </div>
      </div>
      <div className=" fixed bottom-0 w-full">
        <AllCompleted />
      </div>
    </>
  );
}

export default ContainerTodoList;
