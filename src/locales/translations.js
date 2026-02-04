import en from './en.json';
import id from './id.json';

// Named export (bukan default)
export const translations = {
  en,
  id
};

// Helper function
export const getTranslation = (lang, key) => {
  try {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation "${key}" not found for "${lang}"`);
        return key;
      }
    }
    
    return value;
  } catch (error) {
    console.error('Translation error:', error);
    return key;
  }
};