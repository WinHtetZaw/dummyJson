import { Loader } from "@mantine/core";
import React from "react";

const Loading = () => {
  return (
    <div className=" absolute top-0 flex justify-center items-center w-screen h-screen bg-slate-200 bg-opacity-25 backdrop-blur-sm">
      <Loader className="" size={48} />
    </div>
  );
};

export default Loading;
