import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
        </form>
    );
}

export default SearchBar;