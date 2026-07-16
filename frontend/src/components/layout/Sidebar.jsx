import { Link } from "react-router-dom";
import {
  FaHome,
  FaRoute,
  FaRobot,
  FaFolderOpen,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-[#131B35] min-h-screen p-6">

      <h2 className="text-2xl font-bold text-violet-400 mb-10">
        AI Mentor Pro
      </h2>

      <ul className="space-y-5 text-white">

        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-violet-400"
          >
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/roadmap"
            className="flex items-center gap-3 hover:text-violet-400"
          >
            <FaRoute />
            Roadmap
          </Link>
        </li>

        <li>
          <Link
            to="/chat"
            className="flex items-center gap-3 hover:text-violet-400"
          >
            <FaRobot />
            AI Chat
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className="flex items-center gap-3 hover:text-violet-400"
          >
            <FaFolderOpen />
            Projects
          </Link>
        </li>

        <li>
         <Link
             to="/resources"
             className="flex items-center gap-3 hover:text-violet-400"
          >
            📚 Resources
          </Link>
           </li>

        <li>
          <Link
            to="/profile"
            className="flex items-center gap-3 hover:text-violet-400"
          >
            <FaUser />
            Profile
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;