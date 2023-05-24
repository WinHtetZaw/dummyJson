import { Pagination } from "@mantine/core";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Paginate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePage, setActivePage] = useState(1);
  const nav = useNavigate();

  // useEffect(() => {
  //   Cookies.get("currentPage") && setActivePage(parseFloat(Cookies.get("currentPage")));
  //   console.log(parseFloat(Cookies.get("currentPage")));
    
  // }, []);


  const handlerChangePagination = (current, start = 0, limit = 10) => {
    // if (Cookies.get("currentPage")) {
    //   setActivePage(Cookies.get("currentPage"));
    // }

    setActivePage(current);
    // console.log(current)
    // Cookies.set("currentPage",current)
    start = (current - 1) * 10;

    // Cookies.set("currentPage", current);
    nav({
      pathname: "/products",
      search: `?${createSearchParams({ skip: start, limit })}`,
    });
  };
  return (
    <div className=" my-10 flex justify-center">
      <Pagination
        value={activePage}
        onChange={handlerChangePagination}
        total={10}
      />
    </div>
  );
};

export default Paginate;
