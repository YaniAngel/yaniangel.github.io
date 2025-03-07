import { motion } from "framer-motion";

const projects = [
  { title: "Project One", description: "Description for project one." },
  { title: "Project Two", description: "Description for project two." },
  { title: "Project Three", description: "Description for project three." },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Here are some of the projects I’ve worked on.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
