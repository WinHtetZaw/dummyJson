import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  const sidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const handleMenuClick = () => {
    toggle();
    sidebarToggle();
  };

  let sidebarStyle;
  if (opened) {
    sidebarStyle = { display: "block" };
  } else {
    sidebarStyle = { display: "none" };
  }

  const closeSidebar = (e) => {
    console.log("u click");
    setShowSidebar(false);
    toggle();
  };


  return (
    <div className=" md:w-[25rem] ">
      <Burger
        className={` absolute  z-30 block md:hidden`}
        opened={opened}
        onClick={toggle}
        aria-label={label}
      />
      <div 
      // style={sidebarStyle} 
      className={`flex w-10 ${(opened)? "block": "hidden"} md:block md:w-full`}>
        <div
          className="  fixed md:hidden top-0 left-0 w-screen h-screen bg-opacity-10 backdrop-blur-[3px] back"
          onClick={closeSidebar}
        ></div>
        <div className=" md:flex bg-white z-20 fixed md:static w-8/12 md:w-full h-full md:h-10 right-0 top-0  ">
          <ul
            className=" mt-14 md:mt-0 flex flex-col md:flex-row md:w-full md:justify-between md:items-center"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            
            <NavLink to={"/"}>
              <motion.li 
              whileHover={{scale:1.1}}
              className=" py-1 px-3 md:p-0 bg-slate-300 md:bg-white border md:border-none md:rounded-none m-2 md:m-0 rounded text-center">
                Home
              </motion.li>
            </NavLink>
            <NavLink to={"/products"}>
              <li className=" py-1 px-3 md:p-0 bg-slate-300 md:bg-white border md:border-none md:hover:underline  md:rounded-none m-2 md:m-0 rounded text-center">
                All Products
              </li>
            </NavLink>
            <li className=" py-1 px-3 md:p-0 bg-slate-300 md:bg-white border md:border-none md:hover:underline  md:rounded-none m-2 md:m-0 rounded text-center">
              Category
            </li>
            <li className=" py-1 px-3 md:p-0 bg-slate-300 md:bg-white border md:border-none md:hover:underline  md:rounded-none m-2 md:m-0 rounded text-center">
              Login
            </li>
            <li className=" py-1 px-3 md:p-0 bg-slate-300 md:bg-white border md:border-none md:hover:underline  md:rounded-none m-2 md:m-0 rounded text-center">
              FAQs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
