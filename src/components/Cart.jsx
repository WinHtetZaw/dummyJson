import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartSub from "./CartSub";
import { Link } from "react-router-dom";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const data = useSelector((state) => state.cartSlice);
  console.log(data.cart.length);
  const cart = data?.cart;

  const totalPriceCalc = total 
  

  return (
    <div className=" mt-20">
      <div className=" flex flex-col justify-center items-center mb-5">
        {cart?.map((el) => (
          <CartSub key={el.id} {...el}  />
        ))}
      </div>
      {data?.cart.length > 0 ? (
        <div className=" flex justify-around pt-5 border-t-2">
          <h3 className=" font-semibold font-serif text-2xl">Total</h3>
          <span className=" text-3xl text-orange-400">
            $ 
            {data?.totalPrice}
          </span>
        </div>
      ) : (
        <div className=" flex justify-center items-center sm:w-2/4 w-3/4 h-10 sm:gap-5 gap-2 bg-white mx-auto">
          <h2>No item found.</h2>
          <Link to={"/products?skip=0&&limit=10"}>
            <span className=" h-7 select-none cursor-pointer bg-slate-100">
              Go to products
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
