import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navs = () => {
    const { currentUser } = useSelector(state => state.user);

    return (
        <ul className="flex gap-10">
            <Link to='/'>
                <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
            </Link>

            <Link to='/about'>
                <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
            </Link>

            <Link to='/profile'>
                {currentUser ? (
                    <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
                ) : (
                    <li className="text-slate-700 hover:underline">Sign in</li>
                )}
            </Link>
        </ul>
    );
}

export default Navs;