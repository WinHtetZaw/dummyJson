import React from "react";
import Path from "./routes/Path";
import Navbar from "./navbar/Navbar";
import { useLocation } from "react-router-dom";
// import Paginate from './components/Paginate'

const App = () => {
  const location = useLocation();
  const hasKey = location.key;
  const showNavbar = location.key !== "default" || location.pathname === '/'
  console.log(location);
  return (
    <div className="">
      <div className="">
        {showNavbar && <Navbar />}
        <Path />
      </div>
    </div>
  );
};

export default App;
