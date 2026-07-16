import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import api from "../services/api";
import { useMemo } from "react";

function Roadmap() {
  const [goal, setGoal] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [roadmapId, setRoadmapId] = useState("");
  const [loading, setLoading] = useState(false);

  // Load roadmap
  const loadRoadmap = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/roadmap", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setGoal(res.data.goal);
      setRoadmap(res.data.topics);
      setRoadmapId(res.data._id);
      setGoal("");


      alert("Roadmap Generated Successfully");

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadRoadmap();
  }, []);

  // Generate roadmap
  const generateRoadmap = async () => {
    try {
      if (!goal.trim()) {
        return alert("Please enter your goal");
      }

      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await api.post(
        "/roadmap",
        {
          goal,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRoadmap(res.data.topics);
      setRoadmapId(res.data._id);

      alert("Roadmap Generated Successfully");

    } catch (err) {
      console.log(err);

      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Complete Topic
  const completeTopic = async (index) => {
  try {

    const token = localStorage.getItem("token");

    const res = await api.put(
      "/roadmap/complete",
      {
        roadmapId,
        topicIndex: index,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setRoadmap(res.data.topics);

  } catch (err) {

    console.log(err);

    alert("Unable to update topic");

  }
};
  // Dashboard Analytics
  const totalTopics = roadmap.length;

  const completedCount = roadmap.filter(
    (item) => item.completed
  ).length;

  const pendingCount = totalTopics - completedCount;

  const progress =
    totalTopics > 0
      ? Math.round((completedCount / totalTopics) * 100)
      : 0;

    return (
    <div className="bg-[#0B1020] min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-10 text-white">

          {/* Heading */}

          <h1 className="text-4xl font-bold">
            AI Learning Roadmap
          </h1>

          <p className="text-slate-400 mt-2">
            Generate and track your personalized AI roadmap.
          </p>

          {/* Input */}

          <div className="mt-8 flex gap-4">

            <input
              type="text"
              placeholder="Example: AI ML Engineer"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="flex-1 bg-[#131B35] p-4 rounded-xl border border-slate-700 outline-none"
            />

            <button
              onClick={generateRoadmap}
              disabled={loading}
              className="bg-violet-600 hover:bg-violet-700 px-8 rounded-xl"
            >
              {loading ? "Generating..." : "Generate Roadmap"}
            </button>

          </div>

          {/* Progress */}

          <div className="mt-10">

            <div className="flex justify-between mb-2">

              <h2 className="text-xl font-semibold">
                Progress
              </h2>

              <span>{progress}%</span>

            </div>

            <div className="w-full bg-slate-700 h-4 rounded-full">

              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              ></div>

            </div>

          </div>

          {/* Dashboard Cards */}

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            <div className="bg-[#131B35] p-6 rounded-xl text-center">

              <h2 className="text-slate-400">
                📚 Total Topics
              </h2>

              <p className="text-4xl font-bold mt-3">
                {totalTopics}
              </p>

            </div>

            <div className="bg-[#131B35] p-6 rounded-xl text-center">

              <h2 className="text-slate-400">
                ✅ Completed
              </h2>

              <p className="text-4xl font-bold mt-3 text-green-400">
                {completedCount}
              </p>

            </div>

            <div className="bg-[#131B35] p-6 rounded-xl text-center">

              <h2 className="text-slate-400">
                ⏳ Pending
              </h2>

              <p className="text-4xl font-bold mt-3 text-orange-400">
                {pendingCount}
              </p>

            </div>

          </div>

          {/* Topics */}

          <div className="grid md:grid-cols-2 gap-5 mt-10">

            {roadmap.map((item, index) => (

              <div
                key={index}
                className="bg-[#131B35] border border-slate-700 rounded-xl p-6"
              >

                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-3">

                  {item.completed ? (
                    <span className="text-green-400">
                      ✅ Completed
                    </span>
                  ) : (
                    <span className="text-orange-400">
                      ⏳ Pending
                    </span>
                  )}

                </p>

                <button
                  onClick={() => completeTopic(index)}
                  disabled={item.completed}
                  className={`mt-5 px-5 py-2 rounded-lg transition ${
                    item.completed
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-violet-600 hover:bg-violet-700"
                  }`}
                >
                  {item.completed
                    ? "Completed"
                    : "Mark Complete"}
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Roadmap;