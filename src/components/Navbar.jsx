import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full padding-x py-6 flex-center-between text-tert-colr">
      <div className="">
        <Link to="/" className="text-2xl font-extrabold font-fira">
          Wills
        </Link>
      </div>
      <ul className="flex-center gap-8">
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
          <a href="http://">My Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
