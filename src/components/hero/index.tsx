import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center bg-transparent px-4 sm:px-6 lg:px-8" style={{ height: '80vh' }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          SHOTBYPRAISE STUDIOS
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          PHOTO - SHORTFORM - DIRECTION - STRATEGIST
        </p>
        <Link
          href="/contact" passHref
          className="bg-white text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-opacity-80 transition duration-300"
        >
          Book Your Session
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Background image */}
        <Image
          src="https://picsum.photos/3000" // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
