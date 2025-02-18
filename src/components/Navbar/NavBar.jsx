import { useState } from "react";
import { FaLeaf, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import NavbarMobile from "./NavbarMobile";
import { AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Products", link: "#" },
    { id: 3, title: "About", link: "#" },
    { id: 4, title: "Shop", link: "#" },
    { id: 5, title: "Contacts", link: "#" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf color="green" />
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={item.link}
                className="text-black uppercase transition duration-300"
              >
                {item.title}
              </a>
              {/* Effet underline espacé en haut */}
              <span className="absolute left-0 bottom-[-4px] w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          ))}
          <button>
            <FaShoppingCart className="text-3xl hover:bg-primary hover:text-white rounded-full p-2" />
          </button>
        </ul>

        {/* Menu burger (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile  */}
      <AnimatePresence>
        {isOpen && <NavbarMobile setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
