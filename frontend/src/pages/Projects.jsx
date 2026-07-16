import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

function Projects() {
  const projects = [
    {
      title: "Student Performance Prediction",
      tech: "Python, Pandas, Scikit-learn",
      level: "Beginner",
      description: "Predict student marks using Machine Learning.",
    },
    {
      title: "House Price Prediction",
      tech: "Python, Regression, Scikit-learn",
      level: "Beginner",
      description: "Predict house prices from real estate data.",
    },
    {
      title: "Movie Recommendation System",
      tech: "Python, Pandas, ML",
      level: "Intermediate",
      description: "Recommend movies based on user interests.",
    },
    {
      title: "Spam Email Classifier",
      tech: "Python, NLP",
      level: "Intermediate",
      description: "Detect spam emails using NLP techniques.",
    },
    {
      title: "AI Chatbot",
      tech: "React, Node.js",
      level: "Intermediate",
      description: "Build a chatbot to answer AI-related questions.",
    },
    {
      title: "Face Mask Detection",
      tech: "TensorFlow, CNN",
      level: "Advanced",
      description: "Detect whether a person is wearing a mask.",
    },
    {
      title: "Fake News Detection",
      tech: "Python, NLP",
      level: "Advanced",
      description: "Identify fake news articles using Machine Learning.",
    },
    {
      title: "Handwritten Digit Recognition",
      tech: "TensorFlow, CNN",
      level: "Intermediate",
      description: "Recognize handwritten digits using the MNIST dataset.",
    },
    {
      title: "Image Classification",
      tech: "TensorFlow, Keras",
      level: "Advanced",
      description: "Classify images into different categories.",
    },
    {
      title: "Resume Screening AI",
      tech: "Python, NLP",
      level: "Advanced",
      description: "Automatically screen resumes using AI.",
    },
    {
      title: "Stock Price Prediction",
      tech: "LSTM, TensorFlow",
      level: "Advanced",
      description: "Predict stock prices using deep learning.",
    },
    {
      title: "Customer Churn Prediction",
      tech: "Python, Scikit-learn",
      level: "Intermediate",
      description: "Predict customers who may leave a company.",
    },
  ];

  return (
    <div className="bg-[#0B1020] min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-10 text-white">
          <h1 className="text-4xl font-bold">
            AI / ML Projects 🚀
          </h1>

          <p className="text-slate-400 mt-2">
            Practice these projects to strengthen your AI/ML portfolio.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#131B35] rounded-2xl border border-slate-700 p-6 hover:border-violet-500 transition"
              >
                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="text-slate-400 mt-3">
                  {project.description}
                </p>

                <p className="mt-4">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {project.tech}
                </p>

                <p className="mt-2">
                  <span className="font-semibold">Difficulty:</span>{" "}
                  <span
                    className={
                      project.level === "Beginner"
                        ? "text-green-400"
                        : project.level === "Intermediate"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }
                  >
                    {project.level}
                  </span>
                </p>

                <div className="flex gap-3 mt-6">
                  <a
                    href={`https://github.com/search?q=${encodeURIComponent(
                      project.title
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-center"
                  >
                    💻 GitHub
                  </a>

                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                      project.title
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg text-center"
                  >
                    📺 Tutorial
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

export default Projects;