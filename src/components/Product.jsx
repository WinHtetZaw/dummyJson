import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const {id, title, price, thumbnail } = props;
  return (
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
        {/* <div className=" py-1 sm:py-2 flex  flex-col content-between">
          <p className=" select-none px-2 sm:px-4  text-sm sm:text-base">
            $ {price}
          </p>
        </div> */}
      </div>
    </Link>
  );
};

export default Product;
