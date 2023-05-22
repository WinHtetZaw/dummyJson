import React from "react";
import { Link } from "react-router-dom";
import NavbarSearch from "./NavbarSearch";
import NavbarMenu from "./NavbarMenu";
import NavbarCart from "./NavbarCart";

const Navbar = () => {
  return (
    <div className=" flex justify-around p-5 bg-white absolute top-0 z-10 w-full">
      <Link to={"/"}>
        <h2>DummyJson</h2>
      </Link>
      <div className=" flex gap-3">
        <NavbarSearch />
        <NavbarCart />
      </div>
      <NavbarMenu />
    </div>
  );
};

export default Navbar;
