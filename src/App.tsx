import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './common/i18n';

import Home from './components/Home';
import Navigation from './common/Navigation';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="container-fluid">
        <Navigation />
        <Home />
      </div>
    </I18nextProvider>
  );
}

export default App;