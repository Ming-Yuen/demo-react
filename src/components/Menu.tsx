import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '../services/MenuQueryResponse';
import { httpGet } from '../common/api';
import { Link } from 'react-router-dom';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  let initialRender = false;
  const [initialData, setInitialData] = useState<MenuItem[]>([]);
  useEffect(() => {
    if (!initialRender) {
      onLoad();
    }

    return () => {
      initialRender = true;
    };
  }, []);

  async function onLoad() {
    try {
      const response = await httpGet(process.env.REACT_APP_MENU_DEFAULT_QUERY!);
      console.log(response!.data.menu);
      setInitialData(response!.data.menu);
    } catch (error) {
      console.log(error);
    }
  }

  function renderMenuItems() {
    return initialData.map((item: MenuItem, index) => {
      return (
        <div className="accordion-item" key={item.id+1}>

          <h2 className="accordion-header" id={`flush-heading${index + 1}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index + 1}`} aria-expanded="false" aria-controls={`flush-collapse${index + 1}`}>
              {item.name}
            </button>
          </h2>


          {item.child !== null ? (
            item.child.map((child: MenuItem, childindex) => {
              return (
                <div id={`flush-collapse${childindex+1}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${childindex+1}`} data-bs-parent="#accordionFlushExample" key={child.id}>
                  <div className="accordion-body"><Link to={child.link} className="nav-link">{t(child.name)}</Link></div>
                </div>
              );
            })
          ) : null}
        </div>
      );
    });
  }

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
        {renderMenuItems()}
    </div>
  );
};

export default LanguageSelector;


