import React, { useState } from "react";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addQuantityPriceCalc,
  reduceQuantityPriceCalc,
  removeFromCart,
} from "../rtk/features/cartSlice";

const CartSub = (props) => {
  const { thumbnail, title, price, brand, category, stock } = props;
  const [itemCount, setItemCount] = useState(1);
  const [fav,setFav] = useState(false)
  const dispatch = useDispatch();

  // console.log(props);

  const oneItemPrice = price * itemCount;

  const handleItemQuantityAdd = () => {
    setItemCount(itemCount + 1);
    dispatch(addQuantityPriceCalc(price));
  };

  const handleItemQuantityReduce = () => {
    if (itemCount <= 1) {
      return;
    }
    setItemCount(itemCount - 1);
    dispatch(reduceQuantityPriceCalc(price));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(props));
    dispatch(reduceQuantityPriceCalc(oneItemPrice));
  };

  return (
    <div className=" bg-white flex justify-around items-center  mt-5 py-3 w-full sm:w-[80%] lg:w-[60%]">
      <div className=" flex justify-around items-center gap-5 sm:gap-10 ">
        <div className=" w-28">
          <img className=" w-full" src={thumbnail} alt={title} />
        </div>
        <div className="">
          <h3 className=" line-clamp-2 font-semibold font-serif text-2xl text-slate-800">
            {title}
          </h3>
          <p className=" text-sm text-slate-700">
            Brand : {brand} | Category : {category}
          </p>
          <span className=" text-sm text-slate-700">
            {stock} item{stock > 1 && "s"} left
          </span>
        </div>
      </div>
      <div className=" flex flex-col gap-2 justify-center items-center">
        <h2 className=" text-4xl text-orange-400">{oneItemPrice}</h2>
        <div className=" flex items-center gap-2 text-slate-700">
          <span onClick={()=> setFav(!fav)} className=" select-none cursor-pointer text-2xl">
            {fav ? (<AiFillHeart className=" text-red-500"/>) : (<AiOutlineHeart className=""/>)}
            
            
          </span>
          <span
            onClick={handleRemoveItem}
            className=" select-none cursor-pointer text-lg"
          >
            <BsTrash3 />
          </span>
        </div>
      </div>
      <div className=" text-slate-700  gap-1">
        <span
          onClick={handleItemQuantityReduce}
          className=" cursor-pointer select-none text-3xl py-1 px-2 hover:bg-slate-100 rounded"
        >
          -
        </span>
        <span className="select-none text-2xl py-1 px-2  rounded">
          {itemCount}
        </span>
        <span
          onClick={handleItemQuantityAdd}
          className=" cursor-pointer select-none text-3xl py-1 px-2 hover:bg-slate-100 rounded"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default CartSub;
