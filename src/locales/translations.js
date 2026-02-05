import en from './en.json';
import id from './id.json';

// Named export (bukan default)
export const translations = {
  en,
  id
};

// Updated getTranslation function with better error handling
export const getTranslation = (lang, key) => {
  try {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        console.warn(`Translation key "${key}" not found for language "${lang}"`);
        
        // Try English as fallback
        let fallbackValue = translations['en'];
        for (const k of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && k in fallbackValue) {
            fallbackValue = fallbackValue[k];
          } else {
            return key; // Return the key itself as last resort
          }
        }
        return fallbackValue;
      }
    }
    
    return value || key;
  } catch (error) {
    console.error('Translation error:', error);
    return key;
  }
};