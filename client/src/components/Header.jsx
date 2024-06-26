import Logo from "./Logo.jsx";
import SearchBar from "./SearchBar";
import Navs from "./Navs";
import { useSelector } from "react-redux";

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <header className="bg-slate-200 shadow-md ">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Logo />
                <SearchBar />
                <Navs />
            </div>
        </header>
    )
}

export default Header;