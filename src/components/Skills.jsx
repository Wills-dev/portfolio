import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="py-16 max-md:py-10 padding-x bg-primary-color">
      <div className="flex-center gap-6">
        <h1 className="text-5xl font-medium text-white max-md:text-2xl">
          Skills
        </h1>
        <img
          src="/assets/stroke.svg"
          alt="stroke"
          className="max-md:w-[120px] max-md:h-[10px]"
        />
      </div>
      <div className="flex-center gap-20 py-8 max-lg:flex-col">
        <div className="flex-cols justify-center gap-16 max-md:gap-10">
          <div className="flex-center justify-center">
            <img
              src="/assets/groupDots.svg"
              alt="dots"
              className="max-w-12 max-h-12 object-contain"
            />
          </div>
          <div className="flex-center gap-24  max-md:gap-10">
            <img
              src="/assets/groupDots.svg"
              alt="dots"
              className="object-contain max-md:max-w-14 max-md:max-h-14"
            />
            <img
              src="/assets/group2.svg"
              alt="dots"
              className="object-contain max-md:max-w-28 max-md:max-h-28"
            />
          </div>
        </div>
        <div className="flex-1 flex-center-between gap-6 flex-wrap max-md:justify-center">
          {skills?.map((items, i) => (
            <div
              key={i}
              className="flex-cols border-2 border-sec-color max-w-[206px] min-w-[206px]"
            >
              <h6 className="py-1 px-3 border-b-2 border-sec-color text-sec-color font-semibold whitespace-nowrap">
                {items.title}
              </h6>
              <div className="flex-cols gap-2 py-2 px-3 h-[150px]">
                {items?.skill?.map((skill, index) => (
                  <p key={index} className="text-sec-color uppercase">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
