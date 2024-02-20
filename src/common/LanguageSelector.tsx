// LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zhHK')}>zhHK</button>
      <button onClick={() => changeLanguage('zhCN')}>zhCN</button>
    </div>
  );
};

export default LanguageSelector;