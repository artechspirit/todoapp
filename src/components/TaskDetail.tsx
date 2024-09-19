import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Todo } from "../types";

const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Mengambil parameter id dari URL
  const [todo, setTodo] = useState<string>();

  useEffect(() => {
    if (id) {
      const savedTodos: Todo[] =
        JSON.parse(localStorage.getItem("todos")!) || [];
      setTodo(savedTodos.filter((item) => item.id === Number(id))[0]?.text);
    }
  }, [id]);
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-5 text-center">Detail Tugas</h2>
      <p className="mb-2">ID: {id}</p>
      <p className="mb-1">Todo: {todo}</p>
      <p className="text-2xl text-gray-800"></p>
      <Link to="/todo" className="text-blue-500 hover:underline">
        Kembali ke Daftar Tugas
      </Link>
    </div>
  );
};

export default TaskDetail;
