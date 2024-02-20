import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './common/i18n';

import Home from './components/Home';
import LanguageSelector from './common/LanguageSelector';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageSelector />
      <Home />
    </I18nextProvider>
  );
}

export default App;