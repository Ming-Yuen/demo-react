import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './common/i18n';

import Home from './pages/Home';
import Navigation from './components/Navigation';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountTrade from './pages/AccountTrade';
import ItemTrade from './pages/ItemTrade';
import Login from './pages/Login';
import PetTrade from './pages/PetTrade';
import Upload from './pages/Upload';
import Uploaded from './pages/Uploaded';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="container-fluid">
          <div className='row'>
            <Navigation />
          </div>
            <Upload />
        </div>

        
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accountTrade" element={<AccountTrade />} />

              <Route path="/itemTrade" element={<ItemTrade />} />

              <Route path="/petTrade" element={<PetTrade />} />

              {/* upload */}
              <Route path="/accountUpload" element={<Upload />} />
              <Route path="/itemUpload" element={<Upload />} />
              <Route path="/itemUploaded" element={<Uploaded />} />
              <Route path="/petUpload" element={<Upload />} />

              <Route path="/login" element={<Login />} />
            </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;