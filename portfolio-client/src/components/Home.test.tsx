import { render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { mockAppProps } from '../mock/data';
import Home from './Home';

const MockAppContext = createContext<IAppProps>({} as IAppProps);

describe("Home Component", () => {

  beforeEach(() => {
    render(
      <MockAppContext.Provider value={mockAppProps}>
        <Home context={MockAppContext} />);
      </MockAppContext.Provider>
    )
  });

  it('has image', () => {
    expect(screen.getByAltText('Profile')).toBeInTheDocument();
  })

  it('has text', () => {
    expect(screen.getByText('Home Test')).toBeInTheDocument();
  });
});