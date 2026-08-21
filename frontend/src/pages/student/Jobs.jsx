import { Search } from "lucide-react";
import JobCard from "../components/JobCard";
import jobs from "../../data/jobs";


function Jobs() {
  return (
    <div>

      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Find Jobs
        </h1>

        <p className="text-slate-500 mt-2">
          Explore placement opportunities that match your skills.
        </p>
      </div>


      {/* Search and Filter */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 mt-8">

        <div className="flex flex-col md:flex-row gap-4">

          {/* Search */}
          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by company or job title..."
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>


          {/* Location */}
          <select
            className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Locations</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
          </select>


          {/* Job Type */}
          <select
            className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>

        </div>

      </div>


      {/* Job Count */}
      <div className="flex justify-between items-center mt-8 mb-4">

        <h2 className="text-lg font-semibold text-slate-800">
          Available Jobs
        </h2>

        <p className="text-sm text-slate-500">
          {jobs.length} jobs found
        </p>

      </div>


      {/* Jobs */}
      <div className="space-y-4">

        {jobs.map((job) => (
          <JobCard
            key={job.company}
            job={job}
          />
        ))}

      </div>

    </div>
  );
}

export default Jobs;