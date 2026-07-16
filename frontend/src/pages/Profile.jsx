import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

function Profile() {
  const user = {
    name: "Aarti Prajapati",
    email: "aarti@example.com",
    goal: "AI / ML Engineer",
    skills: [
      "Python",
      "Machine Learning",
      "React",
      "Node.js",
      "MongoDB",
    ],
    roadmaps: 1,
    completed: 0,
    pending: 12,
    progress: 0,
    streak: 0,
  };

  return (
    <div className="bg-[#0B1020] min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-10 text-white">
          <h1 className="text-4xl font-bold">
            My Profile 👤
          </h1>

          <p className="text-slate-400 mt-2">
            Track your AI learning journey.
          </p>

          {/* Profile Card */}

          <div className="mt-8 bg-[#131B35] rounded-2xl p-8 border border-slate-700">

            <div className="flex items-center gap-6">

              <div className="w-24 h-24 rounded-full bg-violet-600 flex items-center justify-center text-4xl font-bold">
                {user.name.charAt(0)}
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  {user.name}
                </h2>

                <p className="text-slate-400">
                  {user.email}
                </p>

                <p className="mt-2 text-violet-400">
                  🎯 {user.goal}
                </p>
              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <div className="bg-[#131B35] rounded-xl p-6 text-center">
              <h3 className="text-slate-400">
                📚 Roadmaps
              </h3>

              <p className="text-3xl font-bold mt-3">
                {user.roadmaps}
              </p>
            </div>

            <div className="bg-[#131B35] rounded-xl p-6 text-center">
              <h3 className="text-slate-400">
                ✅ Completed
              </h3>

              <p className="text-3xl font-bold text-green-400 mt-3">
                {user.completed}
              </p>
            </div>

            <div className="bg-[#131B35] rounded-xl p-6 text-center">
              <h3 className="text-slate-400">
                ⏳ Pending
              </h3>

              <p className="text-3xl font-bold text-orange-400 mt-3">
                {user.pending}
              </p>
            </div>

            <div className="bg-[#131B35] rounded-xl p-6 text-center">
              <h3 className="text-slate-400">
                🔥 Streak
              </h3>

              <p className="text-3xl font-bold text-cyan-400 mt-3">
                {user.streak} Days
              </p>
            </div>

          </div>

          {/* Progress */}

          <div className="mt-10 bg-[#131B35] rounded-xl p-6">

            <div className="flex justify-between">

              <h2 className="text-2xl font-bold">
                Learning Progress
              </h2>

              <span>
                {user.progress}%
              </span>

            </div>

            <div className="w-full bg-slate-700 h-4 rounded-full mt-5">

              <div
                className="bg-green-500 h-4 rounded-full"
                style={{
                  width: `${user.progress}%`,
                }}
              ></div>

            </div>

          </div>

          {/* Skills */}

          <div className="mt-10 bg-[#131B35] rounded-xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              Skills
            </h2>

            <div className="flex flex-wrap gap-4">

              {user.skills.map((skill, index) => (

                <span
                  key={index}
                  className="bg-violet-600 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

          {/* Future Features */}

          <div className="mt-10 bg-[#131B35] rounded-xl p-6 border border-dashed border-violet-500">

            <h2 className="text-2xl font-bold">
              🚀 Coming Soon
            </h2>

            <ul className="mt-4 space-y-3 text-slate-300">
              <li>✏️ Edit Profile</li>
              <li>📷 Upload Profile Picture</li>
              <li>🏆 Achievement Badges</li>
              <li>📈 Weekly Progress Analytics</li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;