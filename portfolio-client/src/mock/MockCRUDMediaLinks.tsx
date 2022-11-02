import { useState, createContext } from 'react';
import { mockAppProps } from './data';

import CRUDMediaLinks from '../crudComponents/CRUDMediaLinks';
const MockContext = createContext<IAppProps>({} as IAppProps)

function MockCRUDAbout() {

  const [mediaLinks, setMediaLinks] = useState(mockAppProps.mediaLinkProps.mediaLinks);

  const appProps: IAppProps = {
    homeProps: {} as IHomeProps,
    aboutProps: {} as IAboutProps,
    projectProps: {} as IProjectProps,
    contactProps: {} as IContactProps,
    skillProps: {} as ISkillsProps,
    mediaLinkProps: { mediaLinks, setMediaLinks },
    rootUrl: ''
  }

  return (
    <MockContext.Provider value={appProps}>
      <CRUDMediaLinks context={MockContext} token={'Unauthorized'} />
    </MockContext.Provider>
  );
}

export default MockCRUDAbout;
export { MockContext }
