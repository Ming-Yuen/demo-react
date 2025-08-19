import { I18nextProvider } from 'react-i18next';
import i18n from './common/i18n';

import Home from './pages/Home';
import Menu from './components/Menu';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BatchTask from './pages/BatchTask';
import ItemTrade from './pages/ItemTrade';
import Login from './pages/Login';
import PetTrade from './pages/PetTrade';
import Upload from './pages/Upload';
import Uploaded from './pages/Uploaded';

function App() {
  const isLoggedIn = localStorage.getItem('token') !== null;
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="container-fluid">
          <div className='row vh-100 w-100'>
            {isLoggedIn ? (
              <div className='col-2' style={{padding: '0'}}>
                <Menu />
              </div>
            ) : null}
            <div className={isLoggedIn ? 'col-10' : 'col-12'}>
              <Routes>
                <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
                <Route path="/batchTask" element={<BatchTask />} />
                <Route path="/itemTrade" element={<ItemTrade />} />
                <Route path="/petTrade" element={<PetTrade />} />
                {/* upload */}
                <Route path="/accountUpload" element={<Upload />} />
                <Route path="/itemUpload" element={<Upload />} />
                <Route path="/itemUploaded" element={<Uploaded />} />
                <Route path="/petUpload" element={<Upload />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;