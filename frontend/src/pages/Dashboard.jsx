import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import ProgressCard from "../components/dashboard/ProgressCard";
import { Link } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    progress: 0,
    completed: 0,
    pending: 0,
    total: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);

      if (res.data.stats) {
        setStats(res.data.stats);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#0B1020] min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-10 text-white">
          <h1 className="text-4xl font-bold">
            Welcome Back 👋 {user?.name}
          </h1>

          <p className="text-slate-400 mt-2">
            Keep learning and achieve your AI Engineer dream.
          </p>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            <ProgressCard
              title="Learning Progress"
              value={`${stats.progress}%`}
              color="text-violet-400"
            />

            <ProgressCard
              title="Completed Topics"
              value={stats.completed}
              color="text-green-400"
            />

            <ProgressCard
              title="Pending Topics"
              value={stats.pending}
              color="text-orange-400"
            />

            <ProgressCard
              title="Career Goal"
              value="AI / ML Engineer"
              color="text-cyan-400"
            />
          </div>

          {/* Quick Actions */}

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">
              Quick Actions
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <Link
                to="/roadmap"
                className="bg-violet-600 hover:bg-violet-700 p-6 rounded-xl text-center"
              >
                📚
                <h3 className="text-xl font-bold mt-2">
                  Generate Roadmap
                </h3>
              </Link>

              <Link
                to="/chat"
                className="bg-cyan-600 hover:bg-cyan-700 p-6 rounded-xl text-center"
              >
                🤖
                <h3 className="text-xl font-bold mt-2">
                  Ask AI Mentor
                </h3>
              </Link>

              <Link
                to="/projects"
                className="bg-green-600 hover:bg-green-700 p-6 rounded-xl text-center"
              >
                🚀
                <h3 className="text-xl font-bold mt-2">
                  Explore Projects
                </h3>
              </Link>

            </div>
          </div>

          {/* Recent Activity */}

          <div className="mt-10 bg-[#131B35] rounded-2xl p-6 border border-slate-700">

            <h2 className="text-2xl font-semibold mb-5">
              Recent Activity
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✅ Logged In</li>
              <li>📚 Progress: {stats.progress}%</li>
              <li>✅ Completed Topics: {stats.completed}</li>
              <li>⏳ Pending Topics: {stats.pending}</li>
            </ul>

          </div>

          {/* Today's Goal */}

          <div className="mt-8 bg-[#131B35] rounded-2xl p-6 border border-slate-700">

            <h2 className="text-2xl font-semibold mb-4">
              Today's Goal 🎯
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✔ Complete one roadmap topic</li>
              <li>✔ Practice coding for 1 hour</li>
              <li>✔ Build one mini project</li>
              <li>✔ Learn something new</li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;