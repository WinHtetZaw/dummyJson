import React from "react";
import { useGetSingleProductQuery } from "../rtk/services/getProductsApi";
import { useParams } from "react-router-dom";
import { BsFillShareFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(id);
  console.log(product);
  return (
    <div className=" mt-5 sm:mt-10 bg-white w-[80%] flex mx-auto gap-3 rounded shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
      <div className="  w-2/4">
        <img
          className=" h-full object-contain"
          src={product?.thumbnail}
          alt=""
        />
      </div>
      <div className="w-4/6  px-2">
        <div className="  text-sm border-b py-3">
          <h3 className=" text-2xl font-semibold font-serif">
            {product?.title}
          </h3>
          <div className=" flex justify-between">
            <p className=" text-sm">⭐⭐⭐⭐⭐</p>
            <div className=" text-slate-600 flex gap-3 items-center">
              <span className=" text-lg">{<BsFillShareFill />}</span>
              <span className=" text-2xl">{<AiOutlineHeart />}</span>
            </div>
          </div>
          <p>brand : <span className=" text-blue-300">{product?.brand}</span></p>
        </div>
        <h4 className="py-3 border-b text-3xl text-orange-400">$ {product?.price}</h4>
        <div className=" flex gap-3 justify-around my-3">
          <button className=" py-2 px-4 rounded select-none cursor-pointer bg-blue-500 text-white">Buy now</button>
          <button className=" py-2 px-4 rounded select-none cursor-pointer bg-orange-500 text-white">Add to cart</button>
        </div>
      </div>
      {/* <div className="">
        <h4>$ {product?.price}</h4>
      </div> */}
    </div>
  );
};

export default ProductDetail;
