import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-gray-100 px-6 py-3 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <BookOpen className="w-7 h-7 text-blue-900" />
                    <span className=" text-2xl text-blue-900 tracking-wide">
                        Notes
                    </span>
                </Link>

                {/* Links */}
                <div className="space-x-6">
                    <Link
                        to="/"
                        className={`hover:text-blue-900 transition ${location.pathname === "/" ? "text-blue-900 font-semibold" : "text-gray-600"
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/create"
                        className={`hover:text-blue-900 transition ${location.pathname === "/create" ? "text-blue-900 font-semibold" : "text-gray-600"
                            }`}
                    >
                        Create
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;