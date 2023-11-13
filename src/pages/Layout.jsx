// import Footer from "../../components/Footer";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen h-full">
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
