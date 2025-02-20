import React from "react";
import { MenuData } from "../../utils/Data";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utils/animation";
const Product = () => {
  return (
    <section>
      <div className=" container pt-12 pb-20 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Products
        </motion.h1>
        {/* Products */}
        <div className=" flex gap-10 flex-wrap">
          {MenuData.map((product, i) => (
            <motion.div
              variants={FadeLeft(i * 0.5)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              key={product.id}
              className="flex bg-white rounded-2xl flex-wrap gap-4 shadow-[11px_3px_6px_4px_rgba(0,_0,_0,_0.1)] py-2 px-4 cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-[60px] mb-4 scale-125 transform -translate-y-6"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-lg mt-1 font-bold text-secondary">
                  Price: {product.price}
                </p>
              </div>

              {/* Effet de transition pour le hover */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
