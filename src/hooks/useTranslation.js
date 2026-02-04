import { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext.jsx';
import { getTranslation } from './locales/translations';

export const useTranslation = () => {
  const { language, changeLanguage, isLoading } = useContext(LanguageContext);
  
  const t = (key) => {
    return getTranslation(language, key);
  };
  
  return {
    t,                    // Translation function: t('nav.home')
    language,            // Current language code: 'en' or 'id'
    changeLanguage,      // Function to change language
    isLoading           // Loading state during language switch
  };
};