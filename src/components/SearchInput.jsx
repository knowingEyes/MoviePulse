import { FiArrowLeft, FiSearch } from "../utils/iconsLib";

function SearchInput({ setQuery, query, customStyles, handleClick }) {
  return (

      <div className="flex text-white items-center z-50 gap-3 w-[97%] fixed">
        <button className="cursor-pointer" onClick={handleClick}>
          <FiArrowLeft />
        </button>
        <input
          type="search"
          className={`bg-[#1a1a1a]  ${customStyles} p-2 rounded-md flex-1`}
          placeholder={`Search your favourite movies...`}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />{" "}
      </div>
  );
}
export default SearchInput;
