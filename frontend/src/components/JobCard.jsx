import {
  BriefcaseBusiness,
  MapPin,
  IndianRupee,
  ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";
//import jobs from "../data/Jobs.js";

function JobCard({ job }) {

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-200">

      {/* Top Section */}
      <div className="flex justify-between items-start">

        {/* Company Logo / Initial */}
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
            <BriefcaseBusiness
              size={22}
              className="text-indigo-600"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {job.company}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              {job.position}
            </p>
          </div>

        </div>


        {/* Match */}
        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
          {job.match || 85}% Match
        </span>

      </div>


      {/* Job Information */}
      <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-500">

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-slate-400" />
          <span>{job.location}</span>
        </div>


        {/* Salary */}
        <div className="flex items-center gap-2">
          <IndianRupee size={16} className="text-slate-400" />
          <span>{job.salary}</span>
        </div>


        {/* Job Type */}
        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={16} className="text-slate-400" />
          <span>{job.type}</span>
        </div>

      </div>


      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-5">

        {job.skills?.map((skill) => (

          <span
            key={skill}
            className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg"
          >
            {skill}
          </span>

        ))}

      </div>


      {/* Bottom Section */}
      <div className="border-t border-slate-100 mt-6 pt-5">

        <Link
          to={`/opportunities/${job.id}`}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-600 text-white font-medium hover:bg-indigo-600 transition-colors"
        >
          View Opportunity

          <ArrowRight size={17} />

        </Link>

      </div>

    </div>
  );
}

export default JobCard;