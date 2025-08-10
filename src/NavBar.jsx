import { useState } from "react";
import { FiSearch, FiHome, FiBookmark, FiPlusSquare } from "./utils/iconsLib";
import { useActiveTabContext } from "./hooks/useActiveTabContext";

export default function NavBar() {
  const { handleActiveTab } = useActiveTabContext();
  return (
    <nav
      className="bg-gradient-to-t from-[#141414] to-transparent text-white z-40
       fixed w-full bottom-0 p-3"
    >
      <ul className="flex justify-between  items-end [&_button]:cursor-pointer">
        <li>
          <button onClick={() => handleActiveTab("Home")}>
            {" "}
            <FiHome />
          </button>
        </li>
        <li>
          <button onClick={() => handleActiveTab("Search")}>
            <FiSearch />
          </button>
        </li>
        <li>
          <button onClick={() => handleActiveTab("Watchlist")}>
            {" "}
            <FiBookmark />
          </button>
          <p></p>
        </li>
      </ul>
    </nav>
  );
}
