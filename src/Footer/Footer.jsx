import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className=" mt-10 bg-primary/10 text-white py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        {/* logo */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf color="green" />
        </div>
        {/* social */}
        <div className=" text-3xl flex items-center gap-4 mt-6 text-gray-700">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
