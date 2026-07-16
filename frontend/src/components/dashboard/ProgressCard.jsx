function ProgressCard({ title, value, color }) {
  return (
    <div className="bg-[#131B35] rounded-2xl p-6 shadow-lg border border-slate-700 hover:scale-105 transition">

      <h3 className="text-slate-400 text-lg">
        {title}
      </h3>

      <h1 className={`text-4xl font-bold mt-4 ${color}`}>
        {value}
      </h1>

    </div>
  );
}

export default ProgressCard;
