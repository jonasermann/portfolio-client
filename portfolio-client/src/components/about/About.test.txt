import { render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { mockAppProps } from '../mock/data';
import About from './About';

const MockAppContext = createContext<IAppProps>({} as IAppProps);

describe("About Component", () => {

  beforeEach(() => {
    render(
      <MockAppContext.Provider value={mockAppProps}>
        <About context={MockAppContext} />);
      </MockAppContext.Provider>
    )
  });

  it('has title', () => {
    expect(screen.getByText('Background')).toBeInTheDocument();
  })

  it('has paragraphs', () => {
    expect(screen.getByText('About Test 1')).toBeInTheDocument();
    expect(screen.getByText('About Test 2')).toBeInTheDocument();
    expect(screen.getByText('About Test 3')).toBeInTheDocument();
    expect(screen.getByText('About Test 4')).toBeInTheDocument();
  });
});