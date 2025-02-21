import BannerSpashImg from "../../assets/fruits-splash.png";
import { FadeUp, FadeRight, FadeLeft } from "../../utils/animation";
import { motion } from "framer-motion";
import { IoBagHandleOutline } from "react-icons/io5";

const BrandInfo = () => {
  return (
    <section className=" bg-secondary/10 overflow-hidden container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:py-24 py-14">
      {/* banner image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        viewport={{ once: true }}
        className=" flex justify-center items-center"
      >
        <img
          src={BannerSpashImg}
          alt="banner"
          className="drop-shadow w-[300px] md:max-w-[400px] h-full object-cover"
        />
      </motion.div>
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
            About us
          </h1>
          <p>
            At FreshFruit, we are committed to providing high-quality, organic,
            and delicious fruits sourced from the best farms. Our mission is to
            promote healthy eating habits by offering fresh and naturally grown
            produce that brings both flavor and nutrition to your table.
          </p>
          <br />

          <p>
            We believe in sustainability and work closely with local farmers to
            ensure that every fruit we deliver is cultivated with care, free
            from harmful chemicals, and packed with essential nutrients.
          </p>
          <br />
          <p>
            Join us in our journey to a healthier lifestyle, one fruit at a
            time!
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
    </section>
  );
};

export default BrandInfo;
