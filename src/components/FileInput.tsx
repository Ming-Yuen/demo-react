import { ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

interface FileInputProps {
    name: string,
    acceptFileType?:string | undefined,
    onChange?:ChangeEventHandler | undefined
}

export default function FileInput(props: FileInputProps) {
    const { t } = useTranslation();
    return (
        <div className="input-group custom-file-button">
            <label className="input-group-text" htmlFor="inputGroupFile">{t('upload')}</label>
            <input type="file" className="form-control" id="inputGroupFile" accept={props.acceptFileType} onChange={props.onChange} multiple/>
        </div>
    )
}