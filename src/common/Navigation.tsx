import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { httpPost, ApiConfig } from './api';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    loadMenu();
  });

  const loadMenu = async () => {
    const config: ApiConfig = {
      endpointUrl: process.env.REACT_APP_MENU_QUERY!,
      timeout: 5000,
    };
    await httpPost(config)
      .then((response) => {

      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {

          } else if (error.response.status === 500) {

          }
        }
      });
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-1">
          <a className="navbar-brand" href="#">{t('projectName')}</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" } as any}>
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">Link1</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Link2
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
          </ul>

          <div className="col-1">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle custom-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Language
              </button>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item" onClick={() => changeLanguage('en')}>English</div></li>
                <li><div className="dropdown-item" onClick={() => changeLanguage('zhHK')}>中文繁體</div></li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder={t('search')} aria-label="Search" />
              <button className="btn btn-outline-secondary text-nowrap" type="submit">{t('search')}</button>
            </form>
          </div></div>
      </nav>
    </div>
  );
};
export default LanguageSelector;