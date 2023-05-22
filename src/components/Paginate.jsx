import { Group, Pagination } from "@mantine/core";
import React, { useRef, useState } from "react";
import {
  NavLink,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Paginate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = useNavigate();
  // const [start ,setStart] = useState(0)
  const handlerChangePagination = (current, start = 0, limit = 10) => {
    // const  start = current *  10
    start = (current - 1) * 10;
    // nav(`/products/${start}/${limit}`)
    // setSearchParams({skip:start,limit})
    nav({
      pathname: "/products",
      search: `?${createSearchParams({ skip: start, limit })}`,
    });
    // setSearchParams()
    // console.log(current, start, limit);
  };
  return (
    <div className=" my-10 flex justify-center">
      {/* <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? "bg-red-400" : "")}
      >
        1
      </NavLink>
      <NavLink
        to={`/products/30/30`}
        className={({ isActive }) => (isActive ? "bg-blue-400" : "")}
      >
        2
      </NavLink>
      <NavLink
        to={`/products/60/40`}
        className={({ isActive }) => (isActive ? "bg-orange-400" : "")}
      >
        3
      </NavLink> */}
      {/* <Pagination.Root
        onChange={handlerChangePagination}
        total={10}
        getItemProps={(page) => ({
          component: "a",
          href: `#page-${page}`,
        })}
      >
        <Group spacing={7} position="center" mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root> */}
      <Pagination onChange={handlerChangePagination} total={10} />
    </div>
  );
};

export default Paginate;
