import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-center p-4 sm:p-6 md:p-8 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg sm:text-xl md:text-4xl">
          Praise Olawuni, aka @shotbypraise, an photographer and visual creator.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSection;