import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="text-center py-4">
      <h1 className="text-2xl font-bold mb-4">React.JS Test (Beta Priyoko)</h1>
      <Link to="/todo" className="text-blue-500 hover:underline font-bold mr-4">
        Soal 1 & 3
      </Link>
      <Link to="/register" className="text-blue-500 hover:underline font-bold">
        Soal No.2
      </Link>
    </div>
  );
};

export default Navigation;
