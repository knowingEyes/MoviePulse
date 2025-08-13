import { useState } from "react";
import { FiSearch, FiHome, FiBookmark, FiPlusSquare } from "./utils/iconsLib";
import { useActiveTabContext } from "./hooks/useActiveTabContext";

export default function NavBar() {
  const { handleActiveTab } = useActiveTabContext();
  return (
    <nav
      className="backdrop-blur-md bg-black/40 shadow-lg shadow-black/50  to-transparent text-white z-40 
       fixed w-full bottom-0 p-3 pb-4 "
    >
      <ul className="flex justify-between  items-end [&_button]:cursor-pointer">
        <li>
          <button onClick={() => handleActiveTab("Home")}>
            {" "}
            <FiHome  className="text-[1.15rem]"/>
          </button>
        </li>
        <li>
          <button onClick={() => handleActiveTab("Search")}>
            <FiSearch className="text-[1.15rem]" />
          </button>
        </li>
        <li>
          <button onClick={() => handleActiveTab("Watchlist")}>
            {" "}
            <FiBookmark className="text-[1.15rem]"/>
          </button>
          <p></p>
        </li>
      </ul>
    </nav>
  );
}
