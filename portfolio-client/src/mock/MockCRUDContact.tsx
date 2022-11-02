import { useState, createContext } from 'react';
import { mockAppProps } from './data';

import CRUDContact from '../crudComponents/CRUDContact';
const MockContext = createContext<IAppProps>({} as IAppProps)

function MockCRUDAbout() {

  const [contacts, setContacts] = useState(mockAppProps.contactProps.contacts);

  const appProps: IAppProps = {
    homeProps: {} as IHomeProps,
    aboutProps: {} as IAboutProps,
    projectProps: {} as IProjectProps,
    contactProps: { contacts, setContacts },
    skillProps: {} as ISkillsProps,
    mediaLinkProps: {} as IMediaLinkProps,
    rootUrl: ''
  }

  return (
    <MockContext.Provider value={appProps}>
      <CRUDContact context={MockContext} token={'Unauthorized'} />
    </MockContext.Provider>
  );
}

export default MockCRUDAbout;
export { MockContext }
