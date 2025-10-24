export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p className="mb-2">
        © {new Date().getFullYear()} Martin Kihungi. All rights reserved.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/yourusername"
          className="hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          className="hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
