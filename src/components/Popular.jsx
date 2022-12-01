import React from "react";

const Popular = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 text-center">
      <h1>Popular Books</h1>
      <p>Explore the recent books that have drawn the attention of many</p>
      <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
        <div className="relative">
          <img className="w-full h-full object=cover" src="./images/hero-img.jpg" alt="" />
          <div className="bg-grey-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
              Book Title
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full object=cover" src="./images/hero-img.jpg" alt="" />
          <div className="bg-grey-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
              Book Title
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full object=cover" src="./images/hero-img.jpg" alt="" />
          <div className="bg-grey-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
              Book Title
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full object=cover" src="./images/hero-img.jpg" alt="" />
          <div className="bg-grey-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
              Book Title
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
