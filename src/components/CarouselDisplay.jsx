import React from "react";

const images = ["https://shorturl.at/hiBI8", "https://shorturl.at/dsY58","https://shorturl.at/imKSZ"];

const CarouselDisplay = () => {
 
  return (
    <div className=" absolute top-0 h-screen w-screen ">
      {/* <div className=" absolute h-1/2 bottom-0 w-full bg-[rgba(255,0,0,1)]  bg-gradient-to-b from-[rgba(255,0,0,0)] to-[rgba(255,0,0,1)]]"></div> */}
      <img className=" w-full h-full object-cover object-center" src="https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
  );
};

export default CarouselDisplay;

// https://shorturl.at/hiBI8
// https://shorturl.at/dsY58
// https://shorturl.at/imKSZ
