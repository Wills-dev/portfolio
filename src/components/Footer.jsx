import React from "react";

const Footer = () => {
  return (
    <section className="py-6 max-md:py-3 padding-x bg-primary-color flex-cols w-full border-t-1 border-gray-700 relative gap-5 text-tert-colr">
      <div className="flex-center-between gap-8">
        <div className="">
          <a href="/" className="text-2xl font-extrabold font-fira ">
            Wills
          </a>
        </div>
        <ul className="flex-center gap-8 ">
          <li className="">
            <a
              href="https://www.instagram.com/willss_z?igsh=cnlrOHNyMWR0YzVi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/Ig.svg"
                alt="instagram"
                className="w-6 h-6 object-contain"
              />
            </a>
          </li>
          <li className="">
            <a
              href="https://github.com/Wills-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="/assets/github.svg"
                alt="github"
                className="w-6 h-5 object-contain"
              />
            </a>
          </li>
          <li className="">
            <a
              href="https://twitter.com/Willsssss_"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="/assets/x.svg"
                alt="X"
                className="w-6 h-4 object-contain"
              />
            </a>
          </li>
          <li className="">
            <a
              href="https://www.linkedin.com/in/victor-ejiogu-4b594916a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="/assets/linkedIn.svg"
                alt="LinkedIn"
                className="w-6 h-4 object-contain"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-center-between gap-8">
        <a
          href="mailto:ejioguvictor6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ejioguvictor6@gmail
        </a>
        <div className="flex-center gap-2 max-sm:flex-col">
          <p>+2347069361700</p>
          <p>+2347083701256</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
