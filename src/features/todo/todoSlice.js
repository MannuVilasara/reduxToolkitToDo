import { createSlice, nanoid } from "@reduxjs/toolkit";

// Utility functions for localStorage
const loadTodosFromStorage = () => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Error loading todos from localStorage:", error);
    return [];
  }
};

const saveTodosToStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos to localStorage:", error);
  }
};

// Load existing todos from localStorage or use default
const existingTodos = loadTodosFromStorage();
const initialState = {
  todos: existingTodos.length > 0 ? existingTodos : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      saveTodosToStorage(state.todos);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToStorage(state.todos);
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToStorage(state.todos);
    },
    clearAllTodos: (state) => {
      state.todos = [];
      saveTodosToStorage(state.todos);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, clearAllTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
