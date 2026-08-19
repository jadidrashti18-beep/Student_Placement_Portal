import { useState } from "react";

import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  UserRound
} from "lucide-react";

import JobCard from "../../components/JobCard";

const jobs = [
  {
    id: 1,
    company: "TCS",
    role: "Software Developer",
    location: "Bangalore",
    salary: "6 LPA",
    match: 92
  },
  {
    id: 2,
    company: "Infosys",
    role: "Frontend Developer",
    location: "Pune",
    salary: "5.5 LPA",
    match: 86
  },
  {
    id: 3,
    company: "Accenture",
    role: "Java Developer",
    location: "Mumbai",
    salary: "6.2 LPA",
    match: 81
  }
];

function Dashboard() {

  const [name,setName] = useState("Drashti");

  return (
    <div className="p-8 max-w-7xl mx-auto">

      {/* Welcome Section */}
      <section>

        <p className="text-sm font-medium text-indigo-600">
          YOUR PLACEMENT WORKSPACE
        </p>
        <button className="bg-white text-black" onClick={() => setName("Student")}>Change Name</button>

        <h1 className="text-3xl font-bold text-slate-900 mt-2">
          Good morning, {name} 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Let's move one step closer to your placement.
        </p>

      </section>


      {/* Readiness + Next Step */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">


        {/* Placement Readiness */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-slate-500">
                PLACEMENT READINESS
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mt-2">
                82%
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center">
              <UserRound className="text-indigo-600" size={24} />
            </div>

          </div>


          {/* Progress */}
          <div className="mt-6">

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div className="w-[82%] h-3 bg-indigo-600 rounded-full">
              </div>

            </div>

          </div>


          {/* Checklist */}
          <div className="flex flex-wrap gap-4 mt-5">

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 size={17} className="text-emerald-500" />
              Profile
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 size={17} className="text-emerald-500" />
              Skills
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <AlertCircle size={17} className="text-amber-500" />
              Resume
            </div>

          </div>

        </div>


        {/* Next Step */}
        <div className="bg-indigo-600 rounded-2xl p-6 text-white">

          <p className="text-sm font-medium text-indigo-200">
            ✦ YOUR NEXT STEP
          </p>

          <h2 className="text-2xl font-semibold mt-3">
            Complete your resume
          </h2>

          <p className="text-indigo-100 mt-2 max-w-md">
            A complete resume can help you become eligible
            for more placement opportunities.
          </p>


          <button className="mt-6 flex items-center gap-2 bg-white text-indigo-600 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-indigo-50 transition">

            Complete Resume

            <ArrowRight size={17} />

          </button>

        </div>

      </section>


      {/* Opportunities */}
      <section className="mt-10">

        <div className="flex items-center justify-between mb-5">

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Opportunities for you
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Based on your current skills
            </p>
          </div>

          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View all →
          </button>

        </div>


       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>

      </section>


      {/* Application Journey */}
      <section className="mt-10">

        <div className="bg-white rounded-2xl border border-slate-200 p-6">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
              <FileText size={20} className="text-indigo-600" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Your Application Journey
              </h2>

              <p className="text-sm text-slate-500">
                Track your placement progress
              </p>
            </div>

          </div>


          {/* Journey */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

            <div>
              <p className="text-3xl font-bold text-slate-900">
                4
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Applications
              </p>
            </div>


            <div>
              <p className="text-3xl font-bold text-slate-900">
                2
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Screening
              </p>
            </div>


            <div>
              <p className="text-3xl font-bold text-slate-900">
                1
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Interview
              </p>
            </div>


            <div>
              <p className="text-3xl font-bold text-slate-900">
                0
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Offers
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;