import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          {NavbarData.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300 
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
