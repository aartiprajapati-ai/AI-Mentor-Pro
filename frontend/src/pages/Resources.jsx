import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

function Resources() {
  const resources = [
    {
      topic: "🐍 Python",
      description: "Start your programming journey with Python.",
      youtube: "https://youtu.be/rfscVS0vtbw",
      docs: "https://docs.python.org/3/",
      practice: "https://www.hackerrank.com/domains/python",
    },
    {
      topic: "📊 NumPy",
      description: "Learn numerical computing and arrays.",
      youtube: "https://youtu.be/QUT1VHiLmmI",
      docs: "https://numpy.org/doc/",
      practice: "https://www.kaggle.com/",
    },
    {
      topic: "🐼 Pandas",
      description: "Master data analysis using Pandas.",
      youtube: "https://youtu.be/vmEHCJofslg",
      docs: "https://pandas.pydata.org/docs/",
      practice: "https://www.kaggle.com/",
    },
    {
      topic: "📈 Statistics",
      description: "Statistics for AI & Machine Learning.",
      youtube: "https://youtu.be/xxpc-HPKN28",
      docs: "https://www.statology.org/",
      practice: "https://www.khanacademy.org/math/statistics-probability",
    },
    {
      topic: "🤖 Machine Learning",
      description: "Build intelligent ML models.",
      youtube: "https://youtu.be/i_LwzRVP7bg",
      docs: "https://scikit-learn.org/",
      practice: "https://www.kaggle.com/",
    },
    {
      topic: "🧠 Deep Learning",
      description: "Learn Neural Networks & TensorFlow.",
      youtube: "https://youtu.be/aircAruvnKk",
      docs: "https://www.tensorflow.org/",
      practice: "https://www.kaggle.com/",
    },
    {
      topic: "👁 Computer Vision",
      description: "Image Processing using OpenCV.",
      youtube: "https://youtu.be/oXlwWbU8l2o",
      docs: "https://docs.opencv.org/",
      practice: "https://www.kaggle.com/",
    },
    {
      topic: "💬 NLP",
      description: "Natural Language Processing.",
      youtube: "https://youtu.be/fOvTtapxa9c",
      docs: "https://huggingface.co/docs",
      practice: "https://www.kaggle.com/",
    },
    {
      topic: "✨ Generative AI",
      description: "Learn LLMs, Prompt Engineering & AI.",
      youtube: "https://youtu.be/mEsleV16qdo",
      docs: "https://ai.google.dev/",
      practice: "https://www.kaggle.com/",
    },
    {
      topic: "💻 DSA",
      description: "Prepare for coding interviews.",
      youtube: "https://youtu.be/RBSGKlAvoiM",
      docs: "https://takeuforward.org/",
      practice: "https://leetcode.com/",
    },
    {
      topic: "📄 Resume",
      description: "Build an ATS-friendly resume.",
      youtube: "https://youtu.be/Tt08KmFfIYQ",
      docs: "https://www.overleaf.com/latex/templates/tagged/cv",
      practice: "https://www.canva.com/resumes/",
    },
    {
      topic: "🎤 Interview",
      description: "Technical & HR Interview Preparation.",
      youtube: "https://youtu.be/1mHjMNZZvFo",
      docs: "https://www.geeksforgeeks.org/interview-preparation-for-software-developer/",
      practice: "https://www.interviewbit.com/",
    },
  ];

  return (
    <div className="bg-[#0B1020] min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-10 text-white">
          <h1 className="text-4xl font-bold">
            Learning Resources 📚
          </h1>

          <p className="text-slate-400 mt-2">
            Best free resources to become an AI / ML Engineer.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10">
            {resources.map((item, index) => (
              <div
                key={index}
                className="bg-[#131B35] border border-slate-700 rounded-2xl p-6 hover:border-violet-500 transition"
              >
                <h2 className="text-2xl font-bold">
                  {item.topic}
                </h2>

                <p className="text-slate-400 mt-3">
                  {item.description}
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={item.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-red-600 hover:bg-red-700 text-center py-3 rounded-lg"
                  >
                    📺 YouTube
                  </a>

                  <a
                    href={item.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-blue-600 hover:bg-blue-700 text-center py-3 rounded-lg"
                  >
                    📖 Documentation
                  </a>

                  <a
                    href={item.practice}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-green-600 hover:bg-green-700 text-center py-3 rounded-lg"
                  >
                    💻 Practice
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;