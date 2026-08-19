import { useState } from "react";
import JobCard from "../../components/JobCard";
import jobs from "../../data/Jobs";
import { Search } from "lucide-react";

function Opportunities() {

  // -----------------------------
  // States
  // -----------------------------
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");


  // -----------------------------
  // Filtering
  // -----------------------------
  const filteredJobs = jobs.filter((job) => {

    // Search filter
    const matchesSearch =
      (
        job.position +
        " " +
        job.company +
        " " +
        job.location
      )
        .toLowerCase()
        .includes(search.toLowerCase());


    // Location filter
    const matchesLocation =
      location === "" || job.location === location;


    // Job type filter
    const matchesJobType =
      jobType === "" || job.type === jobType;


    // All conditions must be true
    return (
      matchesSearch &&
      matchesLocation &&
      matchesJobType
    );
  });


  return (
    <div>

      {/* --------------------------------
          Page Heading
      -------------------------------- */}
      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Find Jobs
        </h1>

        <p className="text-slate-500 mt-2">
          Explore placement opportunities that match your skills.
        </p>

      </div>


      {/* --------------------------------
          Search & Filters
      -------------------------------- */}
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
              placeholder="Search by company, job title or location..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>


          {/* Location */}
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >

            <option value="">
              All Locations
            </option>

            <option value="Bangalore">
              Bangalore
            </option>

            <option value="Pune">
              Pune
            </option>

            <option value="Hyderabad">
              Hyderabad
            </option>

            <option value="Mumbai">
              Mumbai
            </option>

          </select>


          {/* Job Type */}
          <select
            value={jobType}
            onChange={(event) => setJobType(event.target.value)}
            className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >

            <option value="">
              All Types
            </option>

            <option value="Full Time">
              Full Time
            </option>

            <option value="Part Time">
              Part Time
            </option>

            <option value="Internship">
              Internship
            </option>

          </select>

        </div>

      </div>


      {/* --------------------------------
          Job Count
      -------------------------------- */}
      <div className="flex justify-between items-center mt-8 mb-4">

        <h2 className="text-lg font-semibold text-slate-800 px-4 py-2">
          Available Jobs
        </h2>

        <p className="text-sm text-slate-500 px-3 py-1.5 ">
          {filteredJobs.length} jobs found
        </p>

      </div>


      {/* --------------------------------
          Job Cards
      -------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {filteredJobs.map((job) => (

          <JobCard
            key={job.id}
            job={job}
          />

        ))}

      </div>


      {/* --------------------------------
          No Jobs Found
      -------------------------------- */}
      {filteredJobs.length === 0 && (

        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">

          <h3 className="text-lg font-semibold text-slate-700">
            No jobs found
          </h3>

          <p className="text-slate-500 mt-2">
            Try changing your search or filters.
          </p>

        </div>

      )}

    </div>
  );
}

export default Opportunities;