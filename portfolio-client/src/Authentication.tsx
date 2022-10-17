import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authentication.css';

interface IAuthenticationProps {
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
}

const Authentication = (props: IAuthenticationProps) => {

  const token = props.token;
  const setToken = props.setToken;
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState('Admin')

  const handleNavigation = () => navigate('/crud/changes/home', {
    state: {
      token: token,
    }
  })

  useEffect(() => {
    handleToken()
  }, [token])

  const handleToken = () => {

    if (token.length < 163) {
      setPassword('');
    }
    else {
      handleNavigation()
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
        <p onClick={() => handleNavigation()}>Continue With Preview</p>
      </div>
    </div>
  )
}

export default Authentication;
