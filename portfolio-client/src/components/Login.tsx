import { useState } from 'react';
import Admin from './Admin';
import './Login.css';

type Props = {
  handlePageFunction: (component: JSX.Element) => void
  handleAccessAdminFunction: (access: boolean) => void
  accessAdmin: boolean
  App: JSX.Element
}

const Login = (props: Props) => {

  const [password, setPassword] = useState('');

  const realPassword = process.env.REACT_APP_ADMIN_PASSWORD;

  const handleLogin = () => {
    if (password !== realPassword) {
      setPassword('')
    }
    else {
      props.handleAccessAdminFunction(true);
      props.handlePageFunction(<Admin accessAdmin={true} />);
    }
  }

  return (
    <div className="Login-content">
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => handleLogin()}>Log in</button>
      <p onClick={() => props.handlePageFunction(<Admin accessAdmin={false} />)}>Continue With Preview</p>
    </div>
    )
}

export default Login;
