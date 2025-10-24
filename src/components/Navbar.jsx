import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
      {/* Brand Name with Gradient */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Martin Kihungi
      </h1>

      {/* Nav Links as Buttons */}
      <ul className="flex gap-4">
        <li>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 shadow transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="px-4 py-2 rounded-lg font-medium border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="px-4 py-2 rounded-lg font-medium border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:opacity-90 shadow transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
