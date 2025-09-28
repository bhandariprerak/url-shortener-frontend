import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Example: You may need to replace this with your actual authentication logic
// For demo, let's assume isAuthenticated prop is passed or you can use context
const NavBar = ({ isAuthenticated, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          <Link
            to="/"
            className="flex items-center font-montserrat font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-400 to-yellow-300 tracking-tight"
            style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Sword
          </Link>
        </motion.div>

        {/* Hamburger menu (mobile) */}
        <div className="md:hidden">
          <motion.button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Links (desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/"
              className="text-white hover:text-gray-100 font-medium transition"
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/about"
              className="text-white hover:text-gray-100 font-medium transition"
            >
              About
            </Link>
          </motion.div>
          {isAuthenticated ? (
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/dashboard"
                  className="bg-indigo-700 text-white hover:bg-indigo-800 font-medium transition rounded px-4 py-2 shadow"
                >
                  Dashboard
                </Link>
              </motion.div>
              <motion.button
                onClick={handleLogout}
                className="bg-indigo-700 text-white font-semibold rounded px-4 py-2 ml-2 shadow transition hover:bg-indigo-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/register"
                className="bg-indigo-700 text-white font-semibold rounded px-4 py-2 shadow transition hover:bg-indigo-800"
              >
                Login/Sign Up
              </Link>
            </motion.div>
          )}
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden mt-2 flex flex-col space-y-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded shadow px-4 py-3"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/"
                className="text-white font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/about"
                className="text-white font-medium"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </motion.div>
            {isAuthenticated ? (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/dashboard"
                    className="bg-indigo-700 text-white font-medium rounded px-4 py-2 shadow transition hover:bg-indigo-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </motion.div>
                <motion.button
                  onClick={handleLogout}
                  className="bg-indigo-700 text-white font-semibold rounded px-4 py-2 mt-2 shadow transition hover:bg-indigo-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/register"
                  className="bg-indigo-700 text-white font-semibold rounded px-4 py-2 shadow transition hover:bg-indigo-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Login/Sign Up
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;