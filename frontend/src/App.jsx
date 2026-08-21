import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/student/Dashboard";
import Opportunities from "./pages/student/Opportunities";
import JobDetails from "./pages/student/JobDetails";
import Applications from "./pages/student/Applications";
import Profile from "./pages/student/Profile";


const router = createBrowserRouter([
  {
    path: "/student",
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    )
  },

  {
    path: "/student/opportunities",
    element : <Opportunities />
  },
  {
    path:"/student/opportunities/:id",
    element : <JobDetails/>
  },

   {
    path:"/student/application",
    element : <Applications/>
  },
  {
    path:"/student/profile",
    element : <Profile/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;