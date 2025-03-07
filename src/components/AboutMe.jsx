import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Placeholder text about yourself. You can write about your background, 
          education, skills, and what you're passionate about here.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
