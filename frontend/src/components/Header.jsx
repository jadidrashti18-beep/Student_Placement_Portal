import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Overview
        </h2>

        <p className="text-sm text-slate-500">
          Your placement workspace
        </p>
      </div>


      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-56 bg-slate-100 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>


        {/* Notification */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition">

          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full">
          </span>

        </button>


        {/* Divider */}
        <div className="h-8 w-px bg-slate-200">
        </div>


        {/* Student */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
            D
          </div>

          <div className="hidden sm:block">

            <p className="text-sm font-semibold text-slate-800">
              Drashti
            </p>

            <p className="text-xs text-slate-500">
              MCA Student
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;