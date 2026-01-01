import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
      aria-label="Main navigation"
    >
      {/* HEADER */}
      <div
        className="
          flex h-16 items-center justify-between px-8
          rounded-full
          bg-white/10
          backdrop-blur-lg
          border border-white/20
        "
      >
        <a 
          href="#home" 
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          <img src="/mp.svg" alt="MP logo" className="h-9 w-9" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-200">
          <li>
            <a href="#home" className="hover:text-white cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white cursor-pointer">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-white cursor-pointer">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white cursor-pointer">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="
            md:hidden
            text-white
            rounded-md
            p-1
            focus-visible:ring-2
            focus-visible:ring-white/50
            focus:outline-none
          "
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            mt-3
            rounded-2xl
            bg-white/10
            backdrop-blur-lg
            border border-white/20
            px-6 py-4
            flex flex-col gap-4
            text-gray-200
            md:hidden
          "
        >
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
