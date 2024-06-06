import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/'>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-slate-500">Utkarsh</span>
                <span className="text-slate-700">Estates</span>
            </h1>
        </Link>
    );
}

export default Logo;