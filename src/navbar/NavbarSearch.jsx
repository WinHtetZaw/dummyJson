import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const NavbarSearch = () => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length < 1) {
      return;
    }
    // nav(`/products/search/${search}`);
    nav({
      pathname: '/products/search',
      search: `?q=${search}`,
    })
  };
  return (
    <div className=" flex gap-2">
      <div className=" h-9 flex border rounded bg-slate-200 py-1 px-2">
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" bg-transparent outline-none text-slate-700"
            type="text"
            placeholder="Search . . ."
          />
        </form>
        <button
          onClick={() => setSearch("")}
          className=" active:scale-[1.2] text-slate-500 select-none cursor-pointer"
        >
          <MdClear />
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className=" h-9 py-1 px-2 rounded bg-blue-500 text-slate-100"
      >
        Search
      </button>

     
    </div>
  );
};

export default NavbarSearch;
