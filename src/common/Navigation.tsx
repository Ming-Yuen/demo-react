import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="row align-items-end">
      <div className="col">
        <div className="dropdown d-inline-block">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </button>
          <ul className="dropdown-menu">
            <li><div className="dropdown-item" onClick={() => changeLanguage('en')}>English</div></li>
            <li><div className="dropdown-item" onClick={() => changeLanguage('zhHK')}>中文繁體</div></li>
          </ul>
        </div>
      <div className="col">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-nowrap" type="submit">{t('search')}</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default LanguageSelector;