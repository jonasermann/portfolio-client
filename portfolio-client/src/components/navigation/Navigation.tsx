import { Outlet, useNavigate } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

  const navigate = useNavigate();

  return (
    <>
      <nav className="App-nav">
        <div className="App-nav__icon" onClick={() => navigate('/')}>
          Home
        </div>
        <div className="App-nav__icon" onClick={() => navigate('/about')}>
          About
        </div>
        <div className="App-nav__icon" onClick={() => navigate('/projects')}>
          Projects
        </div>
        <div className="App-nav__icon" onClick={() => navigate('./crud')}>
          CRUD
        </div>
        <div className="App-nav__icon" onClick={() => navigate('./contact')}>
          Contact
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation;
