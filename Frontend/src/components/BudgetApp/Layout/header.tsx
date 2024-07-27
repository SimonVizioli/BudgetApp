import { Link } from "react-router-dom";
import { AppDropDownMenu } from "./profileToggle";

const Header = () => {
    return (
        <header className="p-5  bg-teal-700  p-4 shadow-lg fixed w-full top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to={""}>
                    <h1 className="text-3xl font-bold flex items-center space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-teal-200"
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7h18M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7H3zm7 7h1m4 0h1m-5 0h4"
                            />
                        </svg>
                        Budget App!
                    </h1>
                </Link>
                <div className=" space-x-4 shrink-0">
                    <Link to={"/transaction"}>Transaction</Link>
                    <Link to={"/budget"}>Budget</Link>
                    <AppDropDownMenu />
                </div>
            </nav>
        </header>
    );
};

export default Header;
