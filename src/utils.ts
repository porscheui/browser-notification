export type Lang =
  | 'de'
  | 'ru'
  | 'fr'
  | 'en'
  | 'it'
  | 'pt'
  | 'es'
  | 'ja'
  | 'ko'
  | 'zh'
  | 'nl'
  | 'pl'
  | 'cs'
  | 'da'
  | 'et'
  | 'fi'
  | 'lt'
  | 'lv'
  | 'no'
  | 'sl'
  | 'sv'
  | 'tr'
  | 'uk';

export type Locales = { [key in Lang]: { title: string; content: string } };

