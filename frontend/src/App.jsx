import Roadmap from "./pages/Roadmap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/roadmap" element={<Roadmap />} />

       <Route path="/chat" element={<Chat />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/resources" element={<Resources />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;