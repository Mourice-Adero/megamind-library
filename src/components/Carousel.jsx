import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const slideData = [
  {
    image: "/images/carousel1.jpg", imgName: "first image"
  },
  {
    image: "/images/carousel2.jpg", imgName: "second"
  },
  {
    image: "/images/carousel1.jpg", imgName: "third"
  },
  {
    image: "/images/hero-img.jpg", imgName: "fourth"
  },
];
const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = slideData.length;
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeft
        onClick={prevSlide}
        className="absolute z-10 top-2/4 text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRight
        onClick={nextSlide}
        className="absolute z-10 top-2/4 text-3xl text-white cursor-pointer right-8"
      />
      {slideData.map((item, index) => (
        <div className={index === slide ? "opacity-100 relative" : "opacity-0"}>
          {index === slide && (
            <div>
            <img src={item.image} className="w-full rounded-md" alt="" />
            <p className="top-0 left-0 w-full h-full flex justify-center place-items-center text-2xl font-bold text-white bg-gray-900/50 absolute">
              {item.imgName}
            </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
