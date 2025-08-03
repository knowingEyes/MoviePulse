import { FiSearch, FiHome, FiBookmark, FiPlusSquare } from "./utils/iconsLib";

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-t from-[#1a1a1a]/60 to-transparent text-white fixed w-full bottom-0 p-3">
      <ul className="flex justify-between">
        <li>
          <FiHome />
        </li>
        <li>
          <FiSearch />
        </li>
        <li>
          <FiBookmark />
          <p></p>
        </li>
      </ul>
    </nav>
  );
}
