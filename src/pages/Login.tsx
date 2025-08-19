import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { httpPost } from '../common/api';

const Login = () => {
    const { t: translate } = useTranslation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function token() {
        try {
          const response = await httpPost(process.env.REACT_APP_TOKEN_ENQUIRY!, {username,password}, null);
          const { token } = response.data;
          localStorage.setItem('token', token);
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">{translate('username')}</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">{translate('password')}</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setPassword(e.target.value)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">{translate('forgotPassword')}?</label>
                </div>
                <button type="submit" className="btn btn-primary">{translate('signIn')}</button>
            </form>
        </div>
    )
}

export default Login;

function useAuth(): { login: any; } {
    throw new Error('Function not implemented.');
}
