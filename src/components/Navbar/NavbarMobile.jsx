import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
const NavbarMobile = ({ setIsOpen }) => {
  const NavbarMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Products", link: "#" },
    { id: 3, title: "About", link: "#" },
    { id: 4, title: "Shop", link: "#" },
    { id: 5, title: "Contacts", link: "#" },
  ];
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 12 }}
      exit={{ y: -100, opacity: 0 }}
      className="md:hidden absolute top-20 left-0 w-full bg-red-500 text-white rounded-2xl shadow-lg"
    >
      <ul className="flex flex-col items-center space-y-4 py-4">
        {NavbarMenu.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className=" uppercase hover:text-black transition duration-300"
              onClick={() => setIsOpen(false)} // Ferme le menu après un clic
            >
              {item.title}
            </a>
          </li>
        ))}
        <button>
          <FaShoppingCart className="text-3xl hover:bg-primary hover:text-white rounded-full p-2" />
        </button>
      </ul>
    </motion.div>
  );
};

export default NavbarMobile;
