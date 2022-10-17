import { useState, useEffect } from 'react';
import Admin from './Admin';
import './Login.css';

interface IAdminProps {
  handlePageFunction: (component: JSX.Element) => void
}

const Login = (props: IAdminProps) => {

  const [password, setPassword] = useState('');
  const [token, setToken] = useState('Unauthorized');
  const [admin, setAdmin] = useState('Admin')

  useEffect(() => {
    handleToken()
  }, [token])

  const handleToken = () => {

    if (token.length < 163) {
      setPassword('');
    }
    else {
      props.handlePageFunction(<Admin token={token} />)
    }

    setAdmin('Admin');
  }

  const fetchToken = async () => await fetch('https://jeportapi.azurewebsites.net/api/Authentication', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(password)
  })
    .then(response => response.text())
    .then(token => setToken(token))


  const handleLogin = () => {
    setAdmin('Wait');
    fetchToken();
  }

  return (
    <div className="Login-content">
      <div className="Login-content__Description">
        Here, you can perform CRUD operations on the website! Don't worry, as long as you don't know the password,
        you cannot do real changes. Press on "Continue With Preview" to do temporary changes to the site!
      </div>
      <div className="Login-content__Buttons">
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={() => handleLogin()} disabled={admin !== 'Admin'}>{admin}</button>
        <p onClick={() => props.handlePageFunction(<Admin token={token} />)}>Continue With Preview</p>
      </div>
    </div>
  )
}

export default Login;
