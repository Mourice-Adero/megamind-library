import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-screen relative text-lg text-white md:text-2xl">
      <img className="w-full h-full object-cover" src="./images/hero-img.jpg" alt="" />
      <div className="w-full h-full top-0 left-0 bg-gray-900/50  absolute"></div>
      <div className="absolute top-0 h-full w-full flex flex-col justify-center text-center">
      <h2 className="mb-2">
        Welcome to Mega<span className="text-amber-700 m-3">Mind</span> Library
      </h2>
      <p className="m-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus
        veritatis laudantium sed, nihil quo?
      </p>
      <button className="self-center w-20 md:w-1/6 m-4">Explore</button>
      </div>
    </div>
  );
}

export default HeroSection;
