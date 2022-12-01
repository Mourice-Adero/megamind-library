import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header() {
  return (
    <div className="w-full bg-white/70 absolute z-50 p-5 text-black flex justify-between shadow-md">
      <div>
        <h1 className="font-bold text-2xl m-auto">
          Mega<span className="text-amber-700">Mind</span>{" "}
        </h1>
      </div>
      <ul className="gap-2 hidden md:flex md:text-xl m-auto">
        <li>Home</li>
        <li>About</li>
        <li>Articles</li>
        <li>Cartegories</li>
        <li>Items</li>
      </ul>
      <button>Sing Up</button>
      <div className="hidden md:flex gap-2 p-2">
        <BiSearch className="text-xl" />
        <BsPerson className="text-xl" />
      </div>
      <div className="md:hidden">
        <AiOutlineClose />
      </div>
      <div className="md:hidden">
        <HiOutlineMenuAlt4 />
      </div>
    </div>
  );
}

export default Header;
