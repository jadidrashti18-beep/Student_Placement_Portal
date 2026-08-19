function Applications() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        My Applications
      </h1>

      <p className="text-slate-500 mt-2">
        Track the status of your job applications.
      </p>

      <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">
            Java Developer
          </h2>

          <p className="text-slate-500 mt-1">
            ABC Technologies
          </p>

          <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
            Shortlisted
          </span>
        </div>

      </div>
    </div>
  );
}

export default Applications;