import './CRUDHome.css';
import EditIntroduction from './EditIntroduction';
import CRUDSkills from '../crudSkills/CRUDSkills';
import { useSelector, shallowEqual } from 'react-redux';

const Home = (props: IAppProps) => {

  const adminAccess = props.token.length > 163;
  const baseUrl = props.baseUrl;
  const introduction: IIntroduction = useSelector(
    (state: AppState) => state.introduction,
    shallowEqual
  )

  const handleHomeContent = () => {
    fetch(`${baseUrl}/api/introduction`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify(introduction)
    });
  }

  return (
    <div>
      <div
        className="CRUDHome-content">
        <EditIntroduction {...introduction } />
          <button
            className="CRUDHome-content--Save"
            type="button"
            onClick={() => handleHomeContent()}
            disabled={!adminAccess}>
            Update Home
          </button>
      </div>
      <CRUDSkills
        baseUrl=""
        token={props.token} />
    </div>
  )
}

export default Home;
