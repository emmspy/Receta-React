import { useState } from "react";
import food from "../assets/food.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
//react icons
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Favoritos", path: "favoritos" },
    { link: "Mas recetas", path: "recetas" },
    { link: "Contactos", path: "contactos" },
  ];
  return (
    <nav className="bg-white md:px-14 p-4 max-w-screen- mx-auto text-primary">
      <div className="text-lg container mx-auto flex justify-between items-center font-medium">
        <div className="flex space-x-14 items-center">
          <a
            href="/"
            className="text-2x1 font-semibold flex items-center space-x-3 text-primary">
            <img src={food} alt="" className="w-10 inline-block items-center" />
            <span>Recetas</span>
          </a>
          {/* showing navitems using map */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <a
                key={link}
                href={path}
                className="block
                    hover:text-gray-300">
                {link}
              </a>
            ))}
          </ul>
        </div>
        {/* language and signup */}
        <div className="space-x-12 hidden md:flex items-center">
          <a
            href="/"
            className="hidden lg:flex items-center hover:text-secondary">
            <MdLanguage className="mr-2" />
            <span>Languaje</span>
          </a>
          <button
            className="bg-secondary py-2 px-4 transition-all duration-300 rounded
                hover:text-white hover:bg-indigo-600">
            Sign up
          </button>
        </div>
        {/* menu btn. only display on mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300">
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-primary" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
