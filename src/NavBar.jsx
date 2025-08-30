import { FiSearch, FiHome, FiBookmark } from "./utils/iconsLib";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="backdrop-blur-md bg-[#080808]/80 shadow-lg shadow-black/50  to-transparent text-white z-40 
       fixed w-full bottom-0 p-3"
    >
      <ul className="flex justify-between  items-end [&_button]:cursor-pointer">
        <li>
          <NavLink to="homepage">
            {" "}
            <FiHome className="text-[1.15rem]" />
          </NavLink>
        </li>
        <li>
          <NavLink to="searchmovies">
            <FiSearch className="text-[1.15rem]" />
          </NavLink>
        </li>
        <li>
          <NavLink to="watchlists">
            {" "}
            <FiBookmark className="text-[1.15rem]" />
          </NavLink>
          <p></p>
        </li>
      </ul>
    </nav>
  );
}
