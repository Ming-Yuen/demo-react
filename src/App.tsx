import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './common/i18n';

import Home from './components/Home';
import Navigation from './common/Navigation';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
      <div className="container-fluid">
        <Navigation />
        <Home />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;