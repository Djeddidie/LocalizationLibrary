# Localization Library

## Introduction

The Localization Library is a simple JavaScript library for managing translations in web applications. It provides a convenient way to store and retrieve translations for different languages.

## Installation

You can install the Localization Library via npm:

```bash
npm install localization-library
```

## Usage

First, import the `Localization` class in your JavaScript file:

```javascript
const Localization = require('localization-library');
```

Initialize the library with a default language (optional) and set translations for different languages:

```javascript
const localization = new Localization('en');

localization.setTranslations('en', {
  'hello': 'Hello',
  'goodbye': 'Goodbye',
});

localization.setTranslations('fr', {
  'hello': 'Bonjour',
  'goodbye': 'Au revoir',
});
```

To retrieve translations, use the `translate` method:

```javascript
console.log(localization.translate('hello')); // Output: Hello
console.log(localization.translate('hello', 'fr')); // Output: Bonjour
console.log(localization.translate('goodbye', 'fr')); // Output: Au revoir
console.log(localization.translate('thankyou')); // Output: thankyou (Translation not found warning)
```

## API

### `Localization(defaultLanguage)`

- `defaultLanguage`: (Optional) The default language to use if a translation for a specific language is not available.

### `setTranslations(language, translations)`

- `language`: The language code for the translations.
- `translations`: An object containing key-value pairs of translations.

### `translate(key, language)`

- `key`: The translation key to retrieve.
- `language`: (Optional) The language code for the translation. If not provided, the default language will be used.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
