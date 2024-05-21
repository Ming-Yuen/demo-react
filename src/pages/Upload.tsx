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

  const closeItem = (index: number) => {
    setItemImages(prevImages => prevImages.filter((_, i) => i !== index));
  }

  function uploadItem(index: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <div className="input-group d-flex justify-content-center align-items-center" style={{ height: (itemImages.length === 0 ? '80vh' : '10vh') }}>
        <div className='row'>
          <div className='col'>
            <FileInput name={'fileUpload'} acceptFileType={'image/*'} onChange={handleFileSelect} />
          </div>
        </div>
      </div>
      {
        itemImages.map((image, index) => (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img key={index} src={image} className="img-fluid rounded-start" alt='Item' />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => closeItem(index)}></button>
                  <input type="text" className="form-control" id="floatingInputGroup1" placeholder={translate('title')} />
                  <textarea className="form-control mt-2" rows={4} placeholder="Type your description..." ></textarea>
                  price:<input type='number' className="form-control"/>
                  <div className="row">
                  <button type="button" className="btn btn-secondary mt-2 col-sm-3 col-3" onClick={()=>uploadItem(index)}>{translate('upload')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}