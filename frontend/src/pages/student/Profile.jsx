function Profile() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        My Profile
      </h1>

      <p className="text-slate-500 mt-2">
        Manage your profile and placement information.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-sm mt-8 max-w-3xl">

        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Student Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="text-sm text-slate-500">
              Full Name
            </label>

            <p className="font-medium mt-1">
              Drashti
            </p>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Email
            </label>

            <p className="font-medium mt-1">
              drashti@example.com
            </p>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Degree
            </label>

            <p className="font-medium mt-1">
              MCA
            </p>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              CGPA
            </label>

            <p className="font-medium mt-1">
              8.2
            </p>
          </div>

        </div>

        <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;