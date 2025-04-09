// src/react-i18next.d.ts
import 'react-i18next';

declare module 'react-i18next' {
  interface DefaultNamespace {
    translation: {
      [key: string]: string;
    };
  }

  interface UseTranslationResponse {
    t: (key: string) => string;
  }
}
