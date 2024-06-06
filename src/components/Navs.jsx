import { Link } from "react-router-dom";

const Navs = () => {
    return (
        <ul className="flex gap-10">
            <Link to='/'>
                <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
            </Link>
            <Link to='/about'>
                <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
            </Link>
            <Link to='/sign-in'>
                <li className="text-slate-700 hover:underline">Sign in</li>
            </Link>
        </ul>
    );
}

export default Navs;