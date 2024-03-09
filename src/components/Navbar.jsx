import { useState } from "react";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-full padding-x py-6 flex-center-between text-tert-colr relative bg-scroll">
      <div className="">
        <a href="/" className="text-2xl font-extrabold font-fira">
          Wills
        </a>
      </div>
      <ul className="flex-center gap-8 max-sm:hidden">
        <li className="font-semibold hover:text-primary-color transition-all">
          <a href="/">Home</a>
        </li>
        <li className="font-semibold hover:text-primary-color transition-all">
          <a href="#project">Project</a>
        </li>
        <li className="font-semibold hover:text-primary-color transition-all">
          <a href="#contact">Contact</a>
        </li>
        <li className="font-semibold hover:text-primary-color transition-all">
          <a
            href="https://drive.google.com/file/d/10v6lV2MrOvbd7OXAYx3VoZCvMoBBD4iX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </li>
      </ul>
      {!openSidebar && (
        <div className="block sm:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
            onClick={(e) => setOpenSidebar(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      )}
      {openSidebar && (
        <div className="fixed w-full h-screen top-0 right-0 bg-h-transparent block sm:hidden z-20">
          <div className=" w-[80%] h-full bg-primary-color padding-x flex-cols">
            <div className="flex justify-end sm:hidden  py-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
                onClick={(e) => setOpenSidebar(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex-cols justify-between flex-1 my-4">
              <ul className="flex-cols gap-8 ">
                <li className="font-semibold hover:text-primary-color transition-all">
                  <a href="/">Home</a>
                </li>
                <li className="font-semibold hover:text-primary-color transition-all">
                  <a href="#project" onClick={(e) => setOpenSidebar(false)}>
                    Project
                  </a>
                </li>
                <li className="font-semibold hover:text-primary-color transition-all">
                  <a href="#contact" onClick={(e) => setOpenSidebar(false)}>
                    Contact
                  </a>
                </li>
                <li className="font-semibold hover:text-primary-color transition-all">
                  <a
                    href="https://drive.google.com/file/d/10v6lV2MrOvbd7OXAYx3VoZCvMoBBD4iX/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Resume
                  </a>
                </li>
              </ul>
              <ul className="flex-cols gap-8 ">
                <li className="">
                  <a
                    href="mailto:ejioguvictor6@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/envelope-icon.svg"
                      alt="instagram"
                      className="w-8 h-8 object-contain"
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
                      className="w-8 h-8 object-contain"
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
                      className="w-8 h-6 object-contain"
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
                      className="w-8 h-6 object-contain"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
