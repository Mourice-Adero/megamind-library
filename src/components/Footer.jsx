import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 pb-5">
      <div className="max-w-[1240px] px-4 mx-auto flex flex-col">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="font-bold text-2xl">
            Mega<span className="text-amber-700">Mind</span>
          </h1>
          <div className="flex justify-between w-full my-4 sm:max-w-[280px]">
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>Newsroom</li>
            <li>Newsroom</li>
            <li>Newsroom</li>
            <li>Newsroom</li>
            <li>Newsroom</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>About</li>
            <li>Articles</li>
            <li>Cartegories</li>
            <li>Items</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
