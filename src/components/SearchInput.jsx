import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "../utils/iconsLib";

function SearchInput({ setQuery, query, customStyles }) {
    const navigate = useNavigate()
  return (
    <div className="flex text-white items-center z-50 gap-3">
      <button className="cursor-pointer" onClick={()=> navigate(-1)}>
        <FiArrowLeft className="text-xl" />
      </button>
      <input
        type="search"
        className={`bg-[#1a1a1a]  ${customStyles} p-2 rounded-md max-w-screen-lg mx-auto w-full`}
        placeholder={`Search your favourite movies...`}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />{" "}
    </div>
  );
}
export default SearchInput;
