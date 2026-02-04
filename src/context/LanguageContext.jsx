import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  // Load saved language from localStorage on startup
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Function to change language
  const changeLanguage = (langCode) => {
    if (langCode !== language) {
      setIsLoading(true);
      // Small delay for smooth transition effect
      setTimeout(() => {
        setLanguage(langCode);
        localStorage.setItem('preferred-language', langCode);
        setIsLoading(false);
      }, 150);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage, 
      isLoading 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easy language access
export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};