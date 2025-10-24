export default function Home() {
  return (
    <section className="text-center p-12">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m Martin Kihungi 👋</h1>
      <p className="text-lg text-gray-600">
        Web Developer & Graphic Designer | Blending Creativity with Code
      </p>
      <div className="mt-8 flex gap-4 justify-center">
        <a href="/projects" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700">
          View Projects
        </a>
        <a href="/contact" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-100">
          Contact Me
        </a>
      </div>
    </section>
  );
}
