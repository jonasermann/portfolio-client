import { render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { mockAppProps } from '../mock/data';
import Contact from './Contact';

const MockAppContext = createContext<IAppProps>({} as IAppProps);

describe("Contact Component", () => {

  beforeEach(() => {
    render(
      <MockAppContext.Provider value={mockAppProps}>
        <Contact context={MockAppContext} />);
      </MockAppContext.Provider>
    )
  });

  it('has title', () => {
    expect(screen.getByText('You can reach me the following ways:')).toBeInTheDocument();
  })

  it('has contacts', () => {
    expect(screen.getByText('contact 1')).toBeInTheDocument();
    expect(screen.getByText('contact 2')).toBeInTheDocument();
  });
});