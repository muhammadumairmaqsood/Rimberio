import MainLayout from "@/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";
import Admissions from "@/pages/Admissions";
import CambridgeProgramm from "@/pages/CambridgeProgramm";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import EarlyYearProgramm from "@/pages/EarlyYearProgramm";
import Home from "@/pages/Home";
import PrimaryYearProgramm from "@/pages/PrimaryYearProgramm";
import Programmes from "@/pages/Programmes";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        children: [
          {
            path: "/early-years",
            element: <EarlyYearProgramm />,
          },
          {
            path: "/primary-years",
            element: <PrimaryYearProgramm />,
          },
          {
            path: "/cambridge-primary",
            element: <CambridgeProgramm />,
          },
        ],
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/admissions",
        element: <Admissions />,
      },

      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/programmes",
        element: <Programmes />,
      },
    ],
  },
]);
