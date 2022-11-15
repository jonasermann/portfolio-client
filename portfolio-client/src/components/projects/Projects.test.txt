import { render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { mockAppProps } from '../mock/data';
import Projects from './Projects';

const MockAppContext = createContext<IAppProps>({} as IAppProps);

describe("Projects Component", () => {

  beforeEach(() => {
    render(
      <MockAppContext.Provider value={mockAppProps}>
        <Projects context={MockAppContext} />);
      </MockAppContext.Provider>
    )
  });

  it('has Projects', () => {
    expect(screen.getByText('Project Test 1')).toBeInTheDocument();
    expect(screen.getByText('Project Test 2')).toBeInTheDocument();
    expect(screen.getByText('Project Test 3')).toBeInTheDocument();
    expect(screen.getByText('Project Test 4')).toBeInTheDocument();
    expect(screen.getByText('Project Test 5')).toBeInTheDocument();
  });
});