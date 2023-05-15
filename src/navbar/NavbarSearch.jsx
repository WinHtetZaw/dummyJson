import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavbarSearch = () => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/products/search/${search}`);
  };
  return (
    <div className=" flex gap-2">
      <div className=" flex border rounded bg-slate-200 py-1 px-2">
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" bg-transparent outline-none text-slate-700"
            type="text"
            placeholder="Search . . ."
          />
        </form>
        <button className=" active:scale-[1.2] text-slate-500 select-none cursor-pointer">
          <MdClear />
        </button>
      </div>
      <button className=" py-1 px-2 rounded bg-blue-500 text-slate-100">
        Search
      </button>
    </div>
  );
};

export default NavbarSearch;
