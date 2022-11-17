import './Authentication.css';
import React, { useState, useEffect } from 'react';
import { Dispatch } from "redux";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setToken } from '../actions/crudActions';

const Authentication = () => {

  const navigate = useNavigate();
  const handleNavigation = () => navigate('/crud/changes/home');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState('Admin');

  const dispatch: Dispatch<any> = useDispatch()

  const authenticate = React.useCallback(
    (state: AppState) => dispatch(setToken(state)),
    [dispatch]);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual);

  const token: string = useSelector(
    (state: AppState) => state.token,
    shallowEqual);

  const fetchToken = async () => await fetch(`${baseUrl}/api/Authentication`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(password),
  })
    .then(response => response.text())
    .then(token => authenticate(
      {
        backgroundParagraphs: [],
        contacts: [],
        introduction: {} as IIntroduction,
        mediaLinks: [],
        projects: [],
        skills: [],
        baseUrl: '',
        token: token,
      }
    ));

  const handleToken = () => {
    if (token.length < 163) {
      setPassword('');
    }
    else {
      handleNavigation()
    }
    setAdmin('Admin');
  }

  const handleLogin = () => {
    setAdmin('Wait');
    fetchToken();
    handleToken();
  }

  useEffect(() => {
    handleToken();
  }, [token])

  return (
    <div className="Login-content">
      <div className="Login-content__Description">
        Here, you can perform CRUD operations on the website! Don't worry, as long as you don't know the password,
        you cannot do real changes. Press on "Continue With Preview" to do temporary changes to the site!
      </div>
      <div className="Login-content__Buttons">
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={() => handleLogin()} disabled={admin !== 'Admin'}>{admin}</button>
        <p className="Login-content__Text" onClick={() => handleNavigation()}>Continue With Preview</p>
      </div>
    </div>
  )
}

export default Authentication;
