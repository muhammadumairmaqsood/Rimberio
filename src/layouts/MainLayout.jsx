import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default MainLayout;
