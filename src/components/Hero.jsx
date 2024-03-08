import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center px-16 py-12 w-full b max-md:px-5 max-md:max-w-full relative bg-scroll">
      <div className="flex flex-col w-full max-w-[600px] max-md:max-w-full">
        <h1 className=" text-7xl font-bold text-center text-primary-color max-md:text-4xl">
          Hey I'm <br />
          <span className="text-sec-color">Victor Ejiogu</span>
        </h1>
        <p className="text-2xl py-10 text-tert-colr text-center max-md:text-xl max-md:py-6">
          A <span className="text-sec-color"> Software Engineer</span> that is
          committed to creating amazing digital experiences.
        </p>
      </div>

      <div className="absolute z-10 bottom-6 right-16">
        <img
          src="/public/assets/groupDots.svg"
          alt="dots"
          className="object-contain max-md:max-w-10 max-md:max-h-10"
        />
      </div>
    </div>
  );
};

export default Hero;
