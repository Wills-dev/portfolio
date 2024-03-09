import React from "react";

export const AboutMe = () => {
  return (
    <div className="padding-x py-16 max-md:py-10 flex-center-between gap-10">
      <div className="flex-1">
        <div className="flex-center gap-6">
          <h1 className="text-5xl font-medium text-white max-sm:text-3xl">
            About Me
          </h1>
          <img src="/assets/stroke.svg" alt="stroke" />
        </div>
        <p className="py-6 text-tert-colr leading-6">
          I am a detail-oriented{" "}
          <span className="text-sec-color">Frontend Developer</span> with a
          passion for creating quality applications using JavaScript and its
          frameworks. My journey began in 2019, after completing a zero-mastery
          program in web development. Since then, I've gained hands-on
          experience by contributing to various projects and acquiring more
          certifications in software and web development. <br /> <br />{" "}
          Proficient in JavaScript, Typescript, Next, React, CSS, HTML, and
          more, I specialize in crafting interactive user interfaces and dynamic
          user experiences. I am confident, well-organized, and continuously
          curious about learning new technologies. I thrive on creative
          problem-solving and am perpetually working to improve my skills one
          challenge at a time. <br /> <br /> Outside of coding, you'll often
          find me on the football field or immersed in video games.
          {/* I value personal growth and enjoy sharing
          helpful resources with fellow developers. Whether I'm debugging code
          or enjoying leisure activities, I approach each endeavor with
          enthusiasm and dedication. */}
        </p>
      </div>
      <div className="flex-1 flex-center justify-center max-lg:hidden">
        <img
          src="/public/assets/avatar.jpeg"
          alt="avatar"
          className="max-h-[400px]"
        />
      </div>
    </div>
  );
};
