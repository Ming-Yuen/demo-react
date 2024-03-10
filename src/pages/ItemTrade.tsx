import { t } from 'i18next'
import React from 'react'

export default function ItemTrade() {
  return (
    <div className='row-12'>
      {/* <div className="input-group">
        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
          <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">{t('upload')}</button>
      </div> */}
      <nav className="nav nav-pills flex-column flex-sm-row">
        <a className="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
      </nav>
    </div>
  )
}
