import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-100 text-gray-700 py-6 border-t">
    <div className="container mx-auto px-4 flex flex-col items-center sm:flex-row sm:justify-between gap-4">
      {/* Logo */}
      <div className="flex items-baseline space-x-1">
        <span className="text-sm font-bold font-mono">The</span>
        <span className="text-orange-500 font-bold text-xl sm:text-2xl">Digital</span>
        <span className="text-sm font-bold font-mono">Dinner</span>
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <a href="https://github.com/KausarKhan-2002" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition">
          <FaGithub className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/kausar-khan-88299227a/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition">
          <FaLinkedin className="text-xl" />
        </a>
      </div>

      {/* Contact */}
      <p className="text-sm">
        <a href="mailto:kausarrkhan83@gmail.com" className="text-orange-500 hover:text-orange-600 transition">
          kausarrkhan83@gmail.com
        </a>
      </p>

      {/* © Text */}
      <p className="text-sm">&copy; {new Date().getFullYear()} The Digital Dinner. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
