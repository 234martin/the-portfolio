import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
      {/* Brand Name */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Martin Kihungi
      </h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-4">
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-indigo-600"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block px-4 py-2 font-medium text-indigo-600 hover:text-indigo-800 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block px-4 py-2 font-medium text-indigo-600 hover:text-indigo-800 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={closeMenu}
                  className="block px-4 py-2 font-medium text-indigo-600 hover:text-indigo-800 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block px-4 py-2 font-medium text-white bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg shadow hover:opacity-90 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
