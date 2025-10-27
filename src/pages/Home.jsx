// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <section className="w-full">

      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">

        {/* Video Background (auto-plays, muted, loops) */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-pink-600/40"></div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-3xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I’m <span className="text-indigo-400">Martin Kihungi</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            I’m a <span className="font-semibold">Web Developer</span> and{" "}
            <span className="font-semibold">Graphic Designer</span>, passionate about
            crafting modern websites and sleek designs that blend creativity and functionality.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I graduated from <strong>Nairobits Trust</strong> with a Diploma in
          Design & Web Development. Currently, I work at{" "}
          <strong>Opticom</strong>, where I use my combined skills in{" "}
          <em>web development</em> and <em>graphic design</em> to build
          impactful digital solutions.  
          <br /><br />
          Beyond coding and design, I love creating meaningful user experiences
          and collaborating with teams to bring innovative ideas to life.
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
            { name: "Illustrator", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" },
            { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          ].map((skill, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
            >
              <img src={skill.img} alt={skill.name} className="h-12 mx-auto" />
              <p className="mt-4 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* CV Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={`${import.meta.env.BASE_URL}mycv.pdf`}
            download="Martin_Kihungi_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
            </svg>
            Download CV
          </a>

          <a
            href={`${import.meta.env.BASE_URL}mycv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl shadow hover:bg-indigo-50 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}
