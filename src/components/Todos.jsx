import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  toggleTodo,
  clearAllTodos,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  if (!todos || todos.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No todos yet
          </h3>
          <p className="text-gray-500">Add your first todo to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header with Clear All button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Your Todos ({todos.length})
        </h2>
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to clear all todos?")) {
              dispatch(clearAllTodos());
            }
          }}
          className="px-3 py-1 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded-md font-medium transition-all duration-200"
        >
          Clear All
        </button>
      </div>

      {/* Todos list */}
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
              todo.completed
                ? "bg-green-50 border-green-200 hover:border-green-300"
                : "bg-white border-gray-200 hover:border-gray-300"
            }`}
          >
            <span
              className={`flex-1 text-lg ${
                todo.completed
                  ? "text-green-700 line-through font-medium"
                  : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  todo.completed
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-all duration-200"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
