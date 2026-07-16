import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="h-16 bg-[#131B35] border-b border-slate-700 flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold text-violet-400">
        AI Mentor Pro
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-white">Hi, Aarti 👋</span>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;