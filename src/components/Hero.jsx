const Hero = () => {
  return (
    <div className="flex justify-center items-center px-16 py-12 w-full b max-md:px-5 max-md:max-w-full relative bg-scroll">
      <div className="flex flex-col w-full max-w-[600px] max-md:max-w-full">
        <h1 className=" text-7xl font-bold text-center text-primary-color max-md:text-4xl">
          Hey I'm <br />
          <span className="text-sec-color">Victor Ejiogu</span>
        </h1>
        {/* <p className="text-2xl py-10 text-tert-colr text-center max-md:text-xl max-md:py-6">
          A <span className="text-sec-color"> Frontend Engineer</span> that is
          committed to creating amazing digital experiences.
        </p> */}
        <p className="py-6 text-tert-colr leading-6 text-center">
          I am a detail-oriented{" "}
          <span className="text-sec-color">Frontend Developer</span> with a
          passion for creating quality applications using JavaScript and its
          frameworks. My journey began in 2019, after completing a zero-mastery
          program in web development. Since then, I've gained hands-on
          experience by contributing to various projects and acquiring
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

      <div className="absolute z-10 bottom-6 right-16">
        <img
          src="/assets/groupDots.svg"
          alt="dots"
          className="object-contain max-md:max-w-10 max-md:max-h-10"
        />
      </div>
    </div>
  );
};

export default Hero;
