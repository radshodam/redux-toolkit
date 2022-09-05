import React from "react";
import { useSelector } from "react-redux";

function AllCompleted() {
  //* const {todos}= useSelector((state)=>state.todos) also this is Okay destruction
  const listCompleted = useSelector((state) => state.todos.todos);
  console.log("listCompleted",listCompleted);

  return (
<div className="w- full bg-gradient-to-r from-cyan-200 to-sky-500 px-5 py-2 flex justify-center">
  <p className="text-2xl text-white">total Complete Item:{listCompleted.filter((t) => t.completed).length} </p> 

</div>

  )
}

export default AllCompleted;
