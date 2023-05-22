import React from "react";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarCart = () => {
    const {cart} = useSelector(state => state.cartSlice)
    console.log(cart)
  return (
    <Link to={"/products/cart"}>
      <button className=" h-9 relative">
        <BsCart2 className=" text-3xl" />
        <span className=" absolute bottom-4 w-6 h-6 text-slate-100 rounded-full bg-red-500">
          {cart.length}
        </span>
      </button>
    </Link>
  );
};

export default NavbarCart;
