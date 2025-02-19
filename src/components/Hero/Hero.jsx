import { IoBagHandleOutline } from "react-icons/io5";
import HeroImg from "../../assets/fruit-plate.png";
import LeafImg from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight, FadeUp, FadeLeft } from "../../utils/animation";
const Hero = () => {
  return (
    <section>
      <div className=" grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className=" flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className=" text-center md:text-left mt-6 space-y-3 lg:max-[400px]: ">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl xl:leading-loose font-averia leading-relaxed
              font-bold text-center text-black"
            >
              {" "}
              Healthy <br />
              <p>
                <span className=" text-primary">Fresh</span>
                <span className=" text-secondary"> Fruits!</span>
              </p>
            </motion.h1>
            <div className="p-6">
              <motion.p
                variants={FadeRight(0.9)}
                initial="hidden"
                animate="visible"
                className="text-2xl font-bold tracking-wide  "
              >
                Discover our diverse range of fruits, vegetables, and herbs.
              </motion.p>
              <motion.p
                variants={FadeRight(1.2)}
                initial="hidden"
                animate="visible"
                className=" text-gray-400 mt-2 "
              >
                Enjoy your favorite fruits and vegetables at home.Get Daily for
                good health and mind Order now and get 20% off on your first
                order
              </motion.p>
              <motion.div
                variants={FadeRight(1.5)}
                initial="hidden"
                animate="visible"
                className=" mt-4 justify-self-center"
              >
                <button className=" flex gap-2 items-center bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-xl transition duration-300 shadow-black shadow-2xl hover:scale-110">
                  <span>
                    <IoBagHandleOutline />
                  </span>
                  Order Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className=" flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroImg}
            alt="hero image"
            className=" w-[350px] md:w-[500px] drop-shadow"
          />
        </div>

        <div className=" absolute top-24 md:top-24 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={LeafImg}
            alt="leaf"
            className="w-full md:max-w-[300px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
