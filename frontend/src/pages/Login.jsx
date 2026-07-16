import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("ERROR RESPONSE:", err.response);
      console.log("ERROR DATA:", err.response?.data);

      alert(
        err.response?.data?.message ||
        err.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] flex justify-center items-center px-6">
      <div className="w-full max-w-md bg-[#131B35] rounded-3xl p-10 border border-slate-700 shadow-2xl">
        <h1 className="text-4xl font-bold text-white text-center">
          AI Mentor Pro
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Welcome Back 👋
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#1B2545] border border-slate-700 text-white outline-none focus:border-violet-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#1B2545] border border-slate-700 text-white outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?
          <Link to="/register" className="text-violet-400 ml-2">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;