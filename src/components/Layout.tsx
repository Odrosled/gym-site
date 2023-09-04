import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
