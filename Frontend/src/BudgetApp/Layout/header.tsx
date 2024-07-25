import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="p-6  bg-teal-700 text-white p-4 shadow-lg fixed w-full top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to={"/"}>
                    <h1 className="text-3xl font-bold ">Budget App!</h1>
                </Link>
                <div className=" space-x-4 shrink-0">
                    <Link to={"/user"}>User</Link>
                    <Link to={"/transaction"}>Transaction</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
