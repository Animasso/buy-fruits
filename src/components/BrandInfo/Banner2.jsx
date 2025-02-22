import BannerPlate from "../../assets/fruit-plate2.png";
import { FadeUp } from "../../utils/animation";
import { motion } from "framer-motion";
const Banner2 = () => {
  return (
    <section className=" bg-primary/10 overflow-hidden container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:py-24 py-14">
      {/* banner info */}
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={FadeUp(0.5)}
          className=" flex flex-col justify-center text-center md:text-left space-y-1 lg:max-w-[400px]"
        >
          <h1 className=" font-semibold lg:text-4xl uppercase text-3xl mb-2">
            {" "}
            Our value
          </h1>
          <p>
            At FreshFruit, we believe that quality, freshness, and
            sustainability are the pillars of a healthier lifestyle. Our
            carefully selected fruits are sourced from trusted farms that
            prioritize natural and ethical farming practices.
          </p>
          <br />
          <p>
            We are dedicated to reducing our environmental impact by supporting
            eco-friendly agriculture and minimizing waste. Every piece of fruit
            we offer is free from harmful chemicals, ensuring the best taste and
            nutritional value for our customers.
          </p>
          <br />
          <p>
            Our goal is simple: to make fresh and organic fruits accessible to
            everyone, helping you enjoy a nutritious and delicious diet every
            day.
          </p>
          <motion.div
            variants={FadeUp(0.7)}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            className=" mt-4 flex md:justify-start justify-center"
          >
            <button className="  bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-xl transition duration-300 shadow-black shadow-2xl hover:scale-110">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* banner image */}
      <div className=" flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200, rotate: 90 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          src={BannerPlate}
          alt="banner"
          className=" drop-shadow max-w-[300px] md:max-w-[500px] h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner2;
