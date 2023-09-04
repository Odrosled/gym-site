import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { scheduleDays } from "./utils/schedule";
import Schedule from "./pages/Schedule";
import PricingPage from "./pages/PricingPage";
import ClassesPage from "./pages/ClassesPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/classes",
        element: <ClassesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      // WEEKLY SCHEDULES
      ...scheduleDays.map((day) => ({
        path: `/schedule/${day}`,
        element: <Schedule />,
      })),
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
