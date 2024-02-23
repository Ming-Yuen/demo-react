import React from 'react'
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t: translate } = useTranslation();

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">{translate('username')}</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">{translate('password')}</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">{translate('forgotPassword')}?</label>
                </div>
                <button type="submit" className="btn btn-primary">{translate('signIn')}</button>
            </form>
        </div>
    )
}

export default Login;