import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import TaskDetail from "./components/TaskDetail";
import RegistrationForm from "./components/RegistrationForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App max-w-[500px] mx-auto">
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/todo/:id" element={<TaskDetail />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
