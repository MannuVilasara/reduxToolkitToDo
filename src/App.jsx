import React from "react";
import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            ✅ My Todo App
          </h1>
          <p className="text-gray-600">Stay organized and get things done!</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <AddToDo />
          <Todos />
        </div>
      </div>
    </div>
  );
}
