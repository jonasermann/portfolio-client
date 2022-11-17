import './CRUDHome.css';
import EditIntroduction from './EditIntroduction';
import CRUDSkills from '../crudSkills/CRUDSkills';
import { useSelector, shallowEqual } from 'react-redux';

const Home = () => {

  const introduction: IIntroduction = useSelector(
    (state: AppState) => state.introduction,
    shallowEqual
  )

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual
  )

  const token: string = useSelector(
    (state: AppState) => state.token,
    shallowEqual
  )

  const adminAccess = token.length > 163;

  const handleHomeContent = () => {
    fetch(`${baseUrl}/api/introduction`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(introduction)
    });
  }

  return (
    <div>
      <div className="mb">
        <EditIntroduction {...introduction } />
          <button
            type="button"
            onClick={() => handleHomeContent()}
            disabled={!adminAccess}>
            Update Home
          </button>
      </div>
      <CRUDSkills />
    </div>
  )
}

export default Home;
