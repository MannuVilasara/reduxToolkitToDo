import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddToDo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={handleAddTodo}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-lg"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!input.trim()}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
