// localization.js

class Localization {
    constructor(defaultLanguage = 'en') {
      this.defaultLanguage = defaultLanguage;
      this.translations = {};
    }
  
    setTranslations(language, translations) {
      this.translations[language] = translations;
    }
  
    translate(key, language) {
      const lang = language || this.defaultLanguage;
      const translation = this.translations[lang];
  
      if (!translation) {
        console.error(`Translations not available for language '${lang}'`);
        return key;
      }
  
      const translatedText = translation[key];
  
      if (!translatedText) {
        console.warn(`Translation not found for key '${key}' in language '${lang}'`);
        return key;
      }
  
      return translatedText;
    }
  }
  
  module.exports = Localization;
  