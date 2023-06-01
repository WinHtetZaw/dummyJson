import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar"

const RootLayout = () => {
  return (
    <div>
      <nav className=" absolute top-0 bg-slate-400 w-full">
        <h3>apple</h3>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
