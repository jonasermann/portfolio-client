import { useNavigate, Outlet } from 'react-router-dom';
import './CRUDNavigation.css'

const Navigation = () => {

  const navigate = useNavigate();

  return (
    <>
      <nav className="App-nav">
        <div className="App-nav__icon" onClick={() => navigate('/crud/changes/home')}>
          Home Changes
        </div>
        <div className="App-nav__icon" onClick={() => navigate('/crud/changes/about')}>
          About Changes
        </div>
        <div className="App-nav__icon" onClick={() => navigate('/crud/changes/projects')}>
          Projects Changes
        </div>
        <div className="App-nav__icon" onClick={() => navigate('/crud/changes/contact')}>
          Contact Changes
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation;
