import { useState } from 'react';
import FileInput from '../components/FileInput';
import { useTranslation } from 'react-i18next';

export default function Upload() {
  const { t: translate } = useTranslation();

  const [itemImages, setItemImages] = useState<string[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newImages = Array.from(event.target.files).map(file =>
        URL.createObjectURL(file)
      );
      setItemImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  return (
    <div>
      <div className="input-group d-flex justify-content-center align-items-center" style={{ height: (itemImages.length == 0 ? '80vh' : '10vh') }}>
        <div className='row'>
          <div className='col'>
            <FileInput name={'fileUpload'} acceptFileType={'image/*'} onChange={handleFileSelect} />
          </div>
        </div>
      </div>
      {
        itemImages.map((image, index) => (
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img key={index} src={image} className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <button type="button" className="btn-close" aria-label="Close"></button>
                  <input type="text" className="form-control" id="floatingInputGroup1" placeholder={translate('title')} />
                  <textarea className="form-control" rows={6} placeholder="Type your description..."></textarea>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}