import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-80"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white text-center"
        >
          About Me
        </motion.h1>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">My Journey</h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            I graduated from <strong>Nairobits Trust</strong> with a Diploma in Design & Web Development.  
            Currently, I work at <strong>Opticom</strong> as a <em>Web Developer & Graphic Designer</em>, blending design and code to deliver seamless digital experiences.  
            <br /><br />
            I love turning ideas into interactive websites, crafting user-friendly interfaces, and collaborating on creative projects that make a real impact.
          </p>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Education</h3>
            <p className="text-gray-700">
              Diploma in Design & Web Development, <strong>Nairobits Trust</strong>.  
              Learned advanced web development techniques, UI/UX design, and graphic design tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Experience</h3>
            <p className="text-gray-700">
              Currently at <strong>Opticom</strong>, combining my skills in web development and graphic design to craft interactive, visually stunning web solutions for clients and internal projects.
            </p>
          </motion.div>
        </div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { skill: "React", level: 90 },
              { skill: "Python", level: 85 },
              { skill: "JavaScript", level: 95 },
              { skill: "HTML5 & CSS3", level: 95 },
              { skill: "UI/UX Design", level: 90 },
              { skill: "Photoshop & Illustrator", level: 85 },
            ].map((item) => (
              <div key={item.skill}>
                <h4 className="text-lg font-medium text-gray-800 mb-2">{item.skill}</h4>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-indigo-600 h-4 rounded-full"
                    style={{ width: `${item.level}%`, transition: "width 1s" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="inline-block px-8 py-3 rounded-lg font-semibold bg-indigo-600 text-white shadow-lg transition-all duration-300"
          >
            View My Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
}
