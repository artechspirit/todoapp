import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Todo } from "../types";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const deleteTodo = (id: number) => {
    const currentTodo = todos.filter((todo) => todo.id !== id);
    setTodos(currentTodo);
    localStorage.setItem("todos", JSON.stringify(currentTodo));
  };

  // Load todos dari localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos ke localStorage
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <input
        type="text"
        placeholder="Todo Item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white p-2 w-full">
        Add Todo
      </button>
      <ul className="my-4">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center py-2 border-b"
            >
              {todo.text}

              <div>
                <Link
                  to={`/todo/${todo.id}`}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Detail
                </Link>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white p-1"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-400 py-2 border-b text-center">
            Todo is empty!
          </li>
        )}
      </ul>

      <Link to="/" className="text-blue-500 hover:underline">
        Kembali ke Homepage
      </Link>
    </div>
  );
};

export default TodoList;
