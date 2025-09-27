

import React from "react";
import { FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white py-8 mt-12"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight">Sword</h2>
          <p className="text-sm mt-1 opacity-80">
            Effortlessly shorten, manage, and share your links with Sword.
          </p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/prerakbhandari/sword"
            className="hover:text-gray-200 transition"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://twitter.com/swordlinks"
            className="hover:text-gray-200 transition"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={26} />
          </a>
          <a
            href="https://swordlinks.com"
            className="hover:text-gray-200 transition"
            aria-label="Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size={26} />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs opacity-70">
        &copy; 2025 Sword. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;