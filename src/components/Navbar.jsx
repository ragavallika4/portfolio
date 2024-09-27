import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/react.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white p-4 dark:bg-darkPrimary flex items-center justify-between shadow-md">
      {/* Left Section with Logo and Title */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8" />
        <div className="text-lg font-bold">Ragavallika Alla's Portfolio</div>
      </div>

      {/* Center Section with Navigation Links */}
      <div className="hidden md:flex gap-4">
        <Link to="about" smooth={true} duration={500} className="hover:underline cursor-pointer">About</Link>
        <Link to="projects" smooth={true} duration={500} className="hover:underline cursor-pointer">Projects</Link>
        <Link to="technologies" smooth={true} duration={500} className="hover:underline cursor-pointer">Technologies</Link>
        <Link to="experience" smooth={true} duration={500} className="hover:underline cursor-pointer">Experience</Link>
        <Link to="education" smooth={true} duration={500} className="hover:underline cursor-pointer">Education</Link>
        <Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">Contact</Link>
      </div>

      {/* Right Section with Social Icons and Menu Toggle */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex text-xl gap-2">
          <a href="https://github.com/ragavallika4" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ragavallika-alla-388811177/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration-300">
            <FaLinkedin />
          </a>
        </div>
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-10 right-4 w-full dark:bg-darkPrimary flex flex-col items-end gap-4 p-4 md:hidden shadow-lg">
          <Link to="about" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>About</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>Projects</Link>
          <Link to="technologies" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>Technologies</Link>
          <Link to="experience" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>Experience</Link>
          <Link to="education" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>Education</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>Contact</Link>
          <div className="flex text-xl gap-4">
            <a href="https://github.com/ragavallika4" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration-300">
              <FaGithub />
            </a>
            <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration=300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ragavallika-alla-388811177/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration=300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
