import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      const res = await api.post("/auth/register", form);

      alert(res.data.message);

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] flex justify-center items-center px-6">
      <div className="w-full max-w-md bg-[#131B35] rounded-3xl p-10 border border-slate-700 shadow-2xl">

        <h1 className="text-4xl font-bold text-white text-center">
          AI Mentor Pro
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Create Your Account 🚀
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#1B2545] border border-slate-700 text-white outline-none focus:border-violet-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#1B2545] border border-slate-700 text-white outline-none focus:border-violet-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#1B2545] border border-slate-700 text-white outline-none focus:border-violet-500"
          />

          <button
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            Register
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?
          <Link to="/" className="text-violet-400 ml-2">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;