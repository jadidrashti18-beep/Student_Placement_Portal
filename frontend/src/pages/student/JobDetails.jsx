import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  MapPin,
  IndianRupee,
  CheckCircle
} from "lucide-react";

import jobs from "../../data/jobs";

function JobDetails() {

  // Get job ID from URL
  const { id } = useParams();

  // Find the selected job
  const job = jobs.find((job) => job.id === Number(id));


  // If job does not exist
  if (!job) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">

        <h1 className="text-2xl font-bold text-slate-800">
          Job Not Found
        </h1>

        <p className="text-slate-500 mt-2">
          The opportunity you are looking for does not exist.
        </p>

        <Link
          to="/opportunities"
          className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-slate-900 text-white rounded-xl"
        >
          <ArrowLeft size={18} />
          Back to Opportunities
        </Link>

      </div>
    );
  }


  return (
    <div className="max-w-5xl mx-auto pb-10">

      {/* Back Button */}

      <Link
        to="/opportunities"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-6"
      >
        <ArrowLeft size={17} />
        Back to Opportunities
      </Link>


      {/* Main Job Header */}

      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">

        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          {/* Company + Position */}

          <div className="flex gap-4">

            <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">

              <BriefcaseBusiness
                size={26}
                className="text-indigo-600"
              />

            </div>

            <div>

              <h1 className="text-2xl font-bold text-slate-900">
                {job.position}
              </h1>

              <p className="text-slate-500 mt-1">
                {job.company}
              </p>

            </div>

          </div>


          {/* Match */}

          <div>
            <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full">
              {job.match || 85}% Match
            </span>
          </div>

        </div>


        {/* Job Information */}

        <div className="flex flex-wrap gap-5 mt-7 pt-6 border-t border-slate-100">

          <div className="flex items-center gap-2 text-sm text-slate-600">

            <MapPin
              size={18}
              className="text-slate-400"
            />

            {job.location}

          </div>


          <div className="flex items-center gap-2 text-sm text-slate-600">

            <IndianRupee
              size={18}
              className="text-slate-400"
            />

            {job.salary}

          </div>


          <div className="flex items-center gap-2 text-sm text-slate-600">

            <BriefcaseBusiness
              size={18}
              className="text-slate-400"
            />

            {job.type}

          </div>

        </div>

      </div>


      {/* Content Grid */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">


        {/* Main Content */}

        <div className="md:col-span-2 space-y-6">


          {/* About Job */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-lg font-semibold text-slate-900">
              About the Opportunity
            </h2>

            <p className="text-sm text-slate-500 leading-6 mt-4">
              This opportunity is suitable for students looking to
              start their career in the software development field.
              Candidates will get the opportunity to work on real-world
              projects and develop their technical skills.
            </p>

          </div>


          {/* Required Skills */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-lg font-semibold text-slate-900">
              Required Skills
            </h2>

            <div className="flex flex-wrap gap-2 mt-4">

              {job.skills.map((skill) => (

                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium"
                >

                  <CheckCircle size={15} />

                  {skill}

                </div>

              ))}

            </div>

          </div>


          {/* Eligibility */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h2 className="text-lg font-semibold text-slate-900">
              Eligibility
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">

              <li>• MCA / BCA / Computer Science students</li>

              <li>• Good programming fundamentals</li>

              <li>• Knowledge of required technical skills</li>

              <li>• Willingness to learn and work in a team</li>

            </ul>

          </div>

        </div>


        {/* Apply Section */}

        <div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-6">

            <h2 className="text-lg font-semibold text-slate-900">
              Interested in this opportunity?
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Apply now and track your application from your dashboard.
            </p>


            <button
              className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              Apply Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;