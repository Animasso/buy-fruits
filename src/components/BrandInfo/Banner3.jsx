import BannerBg from "../../assets/banner-bg.jpg";
import { FadeUp } from "../../utils/animation";
import { motion } from "framer-motion";

const Banner3 = () => {
  const bgStyle = {
    backgroundImage: `url(${BannerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.3, duration: 2 }}
      style={bgStyle}
      className=" rounded-3xl bg-secondary/10 overflow-hidden container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:py-24 py-14"
    >
      {/* banner image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        viewport={{ once: true }}
        className=" flex justify-center items-center bg-center bg-[url(../../assets/banner-bg.jpg)] bg-cover bg-no-repeat"
      ></motion.div>
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
            Get your Fruits Today
          </h1>
          <p>
            At FreshFruit, we are committed to providing high-quality, organic,
            and delicious fruits sourced from the best farms. Our mission is to
            promote healthy eating habits by offering fresh and naturally grown
            produce that brings both flavor and nutrition to your table.
          </p>
          <br />

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
    </motion.section>
  );
};

export default Banner3;
