import {
  MdDarkMode,
  MdOutlineLightMode,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative sticky top-0 z-50 px-6 py-4 shadow-lg dark:bg-slate-600 bg-white">
      <div className="flex justify-between items-center dark:text-slate-100 ">
        <section className="font-bold mr-auto text-xl cursor-pointer">Prachi Gupta</section>

        {/* Menu Toggle Button for Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          <li className="hover:bg-[#000080] px-3 py-1 rounded-full hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center text-center">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-[#000080] px-3 py-1 rounded-full hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center text-center">
            <a href="#about">About</a>
          </li>
          <li className="hover:bg-[#000080] px-3 py-1 rounded-full hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center text-center">
            <a href="#projects">Projects</a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
          {darkMode ? (
            <MdDarkMode className="h-6 w-6" />
          ) : (
            <MdOutlineLightMode className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 right-0 pb-3 bg-white dark:bg-slate-600 flex flex-col items-center shadow-lg space-y-1 md:hidden dark:text-slate-100">
          <li className="w-full text-center">
            <a
              href="#"
              onClick={closeMenu}
              className="block py-2 px-4 text-lg hover:text-xl bg-transparent rounded-lg hover:bg-[#000080] hover:text-white dark:hover:text-black dark:hover:bg-white transition-colors"
            >
              Home
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="#about"
              onClick={closeMenu}
              className="block py-2 px-4 text-lg hover:text-xl bg-transparent rounded-lg hover:bg-[#000080] hover:text-white dark:hover:text-black dark:hover:bg-white transition-colors"
            >
              About
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="#projects"
              onClick={closeMenu}
              className="block py-2 px-4 text-lg hover:text-xl bg-transparent rounded-lg hover:bg-[#000080] hover:text-white dark:hover:text-black dark:hover:bg-white transition-colors"
            >
              Projects
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
