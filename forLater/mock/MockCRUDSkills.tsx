import { useState, createContext } from 'react';
import { mockAppProps } from './data';

import CRUDSkills from '../crudComponents/CRUDSkills';
const MockContext = createContext<IAppProps>({} as IAppProps)

function MockCRUDAbout() {

  const [skills, setSkills] = useState(mockAppProps.skillProps.skills);

  const appProps: IAppProps = {
    homeProps: {} as IHomeProps,
    aboutProps: {} as IAboutProps,
    projectProps: {} as IProjectProps,
    contactProps: {} as IContactProps,
    skillProps: { skills, setSkills },
    mediaLinkProps: {} as IMediaLinkProps,
    rootUrl: ''
  }

  return (
    <MockContext.Provider value={appProps}>
      <CRUDSkills context={MockContext} token={'Unauthorized'} />
    </MockContext.Provider>
  );
}

export default MockCRUDAbout;
export { MockContext }
