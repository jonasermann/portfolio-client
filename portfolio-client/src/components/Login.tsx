import { useState } from 'react';
import Admin from './Admin';
import './Login.css';

interface IAdminProps {
  handlePageFunction: (component: JSX.Element) => void
}

const Login = (props: IAdminProps) => {

  const [password, setPassword] = useState('');
  const [token, setToken] = useState('Not Authorized');
  console.log(token);

  const handleLogin = () => {

    fetch('https://jeportapi.azurewebsites.net/api/Authentication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(password)
    })
      .then(response => response.text())
      .then(token => setToken(token))

    if (token === 'Not Authorized') {
      setPassword('');
    }
    else {
      props.handlePageFunction(<Admin token={token} />)
    }
  }

  return (
    <div className="Login-content">
      <div className="Login-content__Description">
        Here, you can perform CRUD operations on the website! Don't worry, as long as you are not logged in,
        you cannot do real changes, but I as the creator of the website know the password and use this page
        to update the site. Press on "Continue With Preview" to do temporary changes to the site!
      </div>
      <div className="Login-content__Buttons">
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={() => handleLogin()}>Log in</button>
        <p onClick={() => props.handlePageFunction(<Admin token={token} />)}>Continue With Preview</p>
      </div>
    </div>
    )
}

export default Login;
