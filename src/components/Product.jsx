import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../rtk/features/cartSlice";
import { BsCart2 } from "react-icons/bs";
import { motion } from "framer-motion";

const item = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Product = (props) => {
  const dispatch = useDispatch();

  // const item = props.item
  // console.log(item)

  const handleAddToCart = (e) => {
    // e.stopPropagation();
    dispatch(addToCart(props));
  };
  const { id, title, price, thumbnail } = props;
  return (
    <motion.div 
    variants={item} 
    initial="hidden"
    animate="visible"
    className=" relative">
      <Link to={`/products/detail/${id}`}>
        <div className=" bg-white cursor-pointer border w-44 sm:w-56 h-[13.5rem] sm:h-[17.5rem]  rounded shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
          <div className=" w-full text-center h-36 sm:h-48">
            <img
              className=" h-full w-full  object-contain bg-transparent object-center"
              src={thumbnail}
              alt=""
            />
          </div>
          <h3 className=" py-1 sm:py-2 text-center select-none font-semibold font-serif px-2 sm:px-4  line-clamp-3 text-sm sm:text-base">
            {title}
          </h3>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className=" w-fit text-xl absolute bottom-1 left-1 right-0 py-1 px-2 rounded select-none cursor-pointer"
      >
        <BsCart2 />
      </button>
    </motion.div>
  );
};

export default Product;
