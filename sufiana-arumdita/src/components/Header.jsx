import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-slate-900/40 backdrop-blur-md border-b border-slate-700/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
        <div className="relative w-10 h-10">
            <img
            src="./image/favicon.png"
            alt="Rocket Logo"
            className="w-full h-full object-contain"
            />
        </div>
        <span className="text-xl font-semibold tracking-wide text-white">
            My Web Profile
        </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
        {navItems.map((item) => (
            <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative px-4 py-2 rounded-md 
                        text-black font-medium transition-all duration-300 
                        border border-slate-700 bg-white/90 
                        hover:text-green-400 hover:border-green-400 
                        hover:shadow-[0_0_12px_#22c55e] hover:bg-slate-800/80
                        active:scale-95"
            >
            {item}
            </a>
        ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 border border-green-400/50 rounded-xl text-slate-200 
                     transition-all duration-300
                     hover:text-green-400 hover:border-green-400
                     hover:bg-white/10 hover:shadow-[0_0_10px_#22c55e80,0_0_25px_#22c55e80]"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-lg border-t border-slate-700/40">
          <nav className="flex flex-col items-center space-y-3 py-4 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="w-4/5 text-center px-5 py-2 border border-green-400/50 rounded-xl 
                           text-slate-200 bg-transparent
                           transition-all duration-300
                           hover:text-green-400 hover:border-green-400
                           hover:bg-white/10 hover:shadow-[0_0_10px_#22c55e80,0_0_25px_#22c55e80]
                           active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;