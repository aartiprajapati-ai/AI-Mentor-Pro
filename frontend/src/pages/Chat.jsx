import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import api from "../services/api";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) {
      return alert("Please enter your question");
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await api.post(
        "/chat",
        {
          question,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnswer(res.data.answer);

    } catch (err) {
      console.log(err);
      alert("Failed to get AI response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0B1020] min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-10 text-white">

          <h1 className="text-4xl font-bold">
            🤖 AI Mentor
          </h1>

          <p className="text-slate-400 mt-2">
            Ask anything about AI, Programming or Career.
          </p>

          <textarea
            rows="5"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: How do I become an AI Engineer?"
            className="w-full mt-8 bg-[#131B35] rounded-xl p-4 outline-none border border-slate-700"
          />

          <button
            onClick={askAI}
            className="mt-5 bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-xl"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>

          {answer && (
            <div className="mt-10 bg-[#131B35] p-6 rounded-xl border border-slate-700">
              <h2 className="text-2xl font-semibold mb-4">
                AI Response
              </h2>

              <pre className="whitespace-pre-wrap text-slate-300">
                {answer}
              </pre>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Chat;