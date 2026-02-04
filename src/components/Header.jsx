import React, { useState, useContext } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../locales/translations";

// SVG Flags dari CDN - JELAS dan BAGUS
const UsFlag = () => (
  <img 
    src="https://flagcdn.com/us.svg" 
    alt="US Flag" 
    className="w-6 h-4 object-cover rounded-sm border border-gray-300"
  />
);

const IdFlag = () => (
  <img 
    src="https://flagcdn.com/id.svg" 
    alt="Indonesia Flag" 
    className="w-6 h-4 object-cover rounded-sm border border-gray-300"
  />
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, changeLanguage, isLoading } = useContext(LanguageContext);
  
  const navItems = ["home", "about", "skills", "projects", "contact"];
  
  // Language options dengan SVG flags
  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: <UsFlag />, 
      nativeName: 'English'
    },
    { 
      code: 'id', 
      name: 'Bahasa', 
      flag: <IdFlag />, 
      nativeName: 'Indonesia'
    }
  ];

  const currentLang = languages.find(lang => lang.code === language);

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
            {translations[language].logoText}
          </span>
        </a>

        {/* Desktop Navigation & Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Desktop Menu */}
          <nav className="flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative px-4 py-2 rounded-md 
                          text-black font-medium transition-all duration-300 
                          border border-slate-700 bg-white/90 
                          hover:text-green-400 hover:border-green-400 
                          hover:shadow-[0_0_12px_#22c55e] hover:bg-slate-800/80
                          active:scale-95"
              >
                {translations[language].nav[item]}
              </a>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="relative ml-4 language-switcher">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 rounded-md
                         bg-slate-800/80 backdrop-blur-sm border border-slate-600/50
                         text-white font-medium transition-all duration-300
                         hover:border-green-400 hover:bg-slate-800
                         hover:shadow-[0_0_10px_#22c55e80] active:scale-95
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Globe size={18} className="text-green-400" />
                  {/* SVG Flag */}
                  <div className="w-6 h-4 flex items-center justify-center">
                    {currentLang?.flag || <UsFlag />}
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`}
                  />
                </>
              )}
            </button>

            {/* Language Dropdown */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 py-2 bg-slate-900/95 backdrop-blur-lg 
                            rounded-lg border border-slate-700/50 shadow-xl shadow-green-900/20
                            animate-fadeIn z-50">
                <div className="px-4 py-2 border-b border-slate-700/50">
                  <p className="text-xs text-slate-400 font-medium">Select Language</p>
                </div>
                
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left
                                transition-all duration-200 hover:bg-slate-800/80
                                ${language === lang.code 
                                  ? 'text-green-400 bg-slate-800/50' 
                                  : 'text-slate-200'
                                }`}
                  >
                    <div className="w-6 h-4 flex items-center justify-center">
                      {lang.flag}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium flex items-center justify-between">
                        <span>{lang.nativeName}</span>
                        {language === lang.code && (
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-green-300">Active</span>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-slate-400">
                        {lang.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu & Language Buttons */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Mobile Language Button */}
          <div className="relative language-switcher">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              disabled={isLoading}
              className="p-2 border border-green-400/50 rounded-xl text-slate-200 
                         transition-all duration-300 hover:text-green-400 
                         hover:border-green-400 hover:bg-white/10 
                         hover:shadow-[0_0_10px_#22c55e80]"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <div className="w-6 h-4 flex items-center justify-center">
                  {currentLang?.flag || <UsFlag />}
                </div>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-green-400/50 rounded-xl text-slate-200 
                       transition-all duration-300 hover:text-green-400 
                       hover:border-green-400 hover:bg-white/10 
                       hover:shadow-[0_0_10px_#22c55e80]"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;