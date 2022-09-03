import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function ContainerTodoList() {
  const todoList = useSelector((state) => state.todos);

  console.log(todoList);

  return (
    <div className="flex justify-center py-10">
      <div className="container max-w-md ">
        <div>
          <AddTodo />
        </div>
        <fieldset>
          {todoList.todos.map((todo, index) => {
            return (
              <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                <TodoItem id={todo.id} {...todo} index={index} />
              </div>
            );
          })}
        </fieldset>
      </div>
    </div>
  );
}

export default ContainerTodoList;
