import React from "react";
import { Link } from "react-router-dom";
import NavbarSearch from "./NavbarSearch";

const Navbar = () => {
  return (
    <div className=" flex justify-around p-5 bg-white">
      <Link to={'/'}>
        <h2>DummyJson</h2>
      </Link>
      <NavbarSearch/>
    </div>
  );
};

export default Navbar;
