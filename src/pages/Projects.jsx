import { motion } from "framer-motion";
import projects from "../data/projects"; // make sure this file exists with proper export

export default function Projects() {
  return (
    <section className="w-full min-h-screen bg-gray-50 px-6 py-16">
      {/* Hero Banner */}
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-80"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-white text-center"
        >
          My Projects
        </motion.h1>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all"
          >
            {/* Project Image */}
            <img
              src={proj.image || "https://source.unsplash.com/600x400/?technology,website"}
              alt={proj.title}
              className="w-full h-56 object-cover"
            />

            {/* Overlay Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-4">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
