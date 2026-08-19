import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  UserRound,
  Settings,
  LogOut,
  ChevronRight
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Logo */}
      <div className="px-6 py-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
            <span className="text-xl">◈</span>
          </div>

          <div>
            <h1 className="font-bold text-lg">
              CampusConnect
            </h1>

            <p className="text-xs text-slate-400">
              Placement Workspace
            </p>
          </div>

        </div>

      </div>


      {/* Main Navigation */}
      <nav className="flex-1 px-4">

        <p className="text-xs font-semibold text-slate-500 uppercase px-3 mb-3">
          Workspace
        </p>


        <NavLink
          to="/student"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-xl mb-1 transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`
          }
        >
          <LayoutDashboard size={19} />
          <span>Overview</span>
        </NavLink>


        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-xl mb-1 transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`
          }
        >
          <BriefcaseBusiness size={19} />
          <span>Opportunities</span>
        </NavLink>


        <NavLink
          to="/applications"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-xl mb-1 transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`
          }
        >
          <FileText size={19} />
          <span>Applications</span>
        </NavLink>


        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-xl mb-1 transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`
          }
        >
          <UserRound size={19} />
          <span>Career Profile</span>
        </NavLink>


        {/* Placement Readiness */}
        <div className="mt-8 px-3">

          <p className="text-xs font-semibold text-slate-500 uppercase mb-4">
            Placement Readiness
          </p>

          <div className="bg-slate-900 rounded-xl p-4">

            <div className="flex justify-between items-center mb-2">

              <span className="text-sm text-slate-300">
                Profile
              </span>

              <span className="text-sm font-semibold text-indigo-400">
                82%
              </span>

            </div>


            <div className="w-full h-2 bg-slate-800 rounded-full">

              <div className="h-2 w-[82%] bg-indigo-500 rounded-full">
              </div>

            </div>


            <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-white mt-4 transition">

              Complete profile

              <ChevronRight size={14} />

            </button>

          </div>

        </div>

      </nav>


      {/* Bottom Navigation */}
      <div className="px-4 pb-5">

        <div className="border-t border-slate-800 pt-4">

          <button className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white transition">
            <Settings size={19} />
            <span>Settings</span>
          </button>


          <button className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-slate-400 hover:bg-red-950 hover:text-red-400 transition">
            <LogOut size={19} />
            <span>Logout</span>
          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;