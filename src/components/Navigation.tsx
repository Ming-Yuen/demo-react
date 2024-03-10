import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '../services/MenuQueryResponse';
import { httpGet } from '../common/api';
import { Link} from 'react-router-dom';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  let initialRender = false;
  const [data, setData] = useState<MenuItem[]>([]);
  useEffect(() => {
    if (!initialRender) {
      LoadMenu();
    }

    return () => {
      initialRender = true;
    };
  }, []);

  async function LoadMenu() {
    try {
      const response = await httpGet(process.env.REACT_APP_MENU_DEFAULT_QUERY!);
      console.log(response!.data.menu);
      setData(response!.data.menu);
    } catch (error) {
      console.log(error);
    }
  }

  function renderMenuItems() {
    return data.map((item: MenuItem, index) => {
      if (item.child === null) {
        return <li className="nav-item" key={index}>
          <Link to={item.link} className="nav-link">{t(item.title)}</Link>
        </li>
      } else {
        return (
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {t(item.title)}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {item.child.map((childItem: MenuItem, childIndex) => {
                return (<li><Link className="dropdown-item" to={childItem.link}>{t(childItem.title)}</Link></li>);
              })}
            </ul>
          </li>
        );
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
            {renderMenuItems()}
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LanguageSelector;