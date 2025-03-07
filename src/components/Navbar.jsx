import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Enables smooth scrolling
import { Menu, X } from "lucide-react"; // Mobile menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold text-white">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="home" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">About</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-800 py-4 px-6 text-center absolute w-full top-full left-0 shadow-md"
        >
          <Link to="home" smooth={true} duration={500} className="block py-2 text-white hover:text-blue-400 cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="block py-2 text-white hover:text-blue-400 cursor-pointer" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="projects" smooth={true} duration={500} className="block py-2 text-white hover:text-blue-400 cursor-pointer" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="block py-2 text-white hover:text-blue-400 cursor-pointer" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
