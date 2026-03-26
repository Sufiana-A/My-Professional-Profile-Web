import React, { useState, useContext, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../locales/translations";

// SVG Flags dari CDN 
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
  const [mobileLangMenuOpen, setMobileLangMenuOpen] = useState(false);
  const { language, changeLanguage, isLoading } = useContext(LanguageContext);
  
  // Refs untuk menangani klik di luar dropdown
  const langDropdownRef = useRef(null);
  const mobileLangDropdownRef = useRef(null);
  const navRef = useRef(null);
  
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

  // Menutup dropdown ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
      if (mobileLangDropdownRef.current && !mobileLangDropdownRef.current.contains(event.target)) {
        setMobileLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Menutup mobile menu ketika memilih item
  const handleNavClick = () => {
    setIsOpen(false);
  };

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
            {translations[language].nav.logoText}
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

          {/* Desktop Language Switcher */}
          <div className="relative ml-4" ref={langDropdownRef}>
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

            {/* Desktop Language Dropdown */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 py-2 bg-slate-900/95 backdrop-blur-lg 
                            rounded-lg border border-slate-700/50 shadow-xl shadow-green-900/20
                            animate-fadeIn z-50">
                <div className="px-4 py-2 border-b border-slate-700/50">
                  <p className="text-xs text-slate-400 font-medium">
                    {language === 'id' ? 'Pilih Bahasa' : 'Select Language'}
                  </p>
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
                            <span className="text-xs text-green-300">
                              {language === 'id' ? 'Aktif' : 'Active'}
                            </span>
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
          {/* Mobile Language Button with Dropdown */}
          <div className="relative" ref={mobileLangDropdownRef}>
            <button
              onClick={() => setMobileLangMenuOpen(!mobileLangMenuOpen)}
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

            {/* Mobile Language Dropdown */}
            {mobileLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 py-2 bg-slate-900/95 backdrop-blur-lg 
                            rounded-lg border border-slate-700/50 shadow-xl shadow-green-900/20
                            animate-fadeIn z-50">
                <div className="px-4 py-2 border-b border-slate-700/50">
                  <p className="text-xs text-slate-400 font-medium">
                    {language === 'id' ? 'Pilih Bahasa' : 'Select Language'}
                  </p>
                </div>
                
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setMobileLangMenuOpen(false);
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
                      <div className="font-medium">
                        {lang.nativeName}
                      </div>
                      {language === lang.code && (
                        <div className="text-xs text-green-300 flex items-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1" />
                          {language === 'id' ? 'Aktif' : 'Active'}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
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

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div 
          ref={navRef}
          className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50
                     animate-slideDown"
        >
          <nav className="flex flex-col py-4 px-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={handleNavClick}
                className="py-3 px-4 rounded-lg text-white font-medium
                           transition-all duration-200 hover:bg-slate-800/80
                           hover:text-green-400 hover:pl-6
                           border-b border-slate-700/50 last:border-0"
              >
                {translations[language].nav[item]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;