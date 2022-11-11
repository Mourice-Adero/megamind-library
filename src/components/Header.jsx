import React from "react";
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

function Header() {
  return (
    <div className="w-full bg-white p-5 text-black flex justify-between shadow-md fixed">
      <div>
        <h1 className="font-bold text-2xl">MegaMind</h1>
      </div>
      <ul className="gap-2 hidden md:flex md:text-xl">
        <li>Home</li>
        <li>About</li>
        <li>Articles</li>
        <li>Cartegories</li>
        <li>Items</li>
      </ul>
      <div className="hidden md:flex gap-2 p-2">
        <BiSearch className="text-xl"/>
        <BsPerson className="text-xl"/>
      </div>
      <div className="md:hidden">
        <AiOutlineClose />
      </div>
      <div className="md:hidden">
        <HiOutlineMenuAlt4/>
      </div>
    </div>
  );
}

export default Header;
