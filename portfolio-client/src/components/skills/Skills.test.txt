import { render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { mockAppProps } from '../mock/data';
import Skills from './Skills';

const MockAppContext = createContext<IAppProps>({} as IAppProps);

describe("Skills Component", () => {

  beforeEach(() => {
    render(
      <MockAppContext.Provider value={mockAppProps}>
        <Skills context={MockAppContext} />);
      </MockAppContext.Provider>
    )
  });

  it('has images', () => {
    expect(screen.getAllByAltText('logo')).toHaveLength(12);
  })

  it('has text', () => {
    expect(screen.getByText('ASP.NET Core')).toBeInTheDocument();
  });

  it('has rows', () => {
    expect(screen.getByText('languages')).toBeInTheDocument();
    expect(screen.getByText('backend')).toBeInTheDocument();
    expect(screen.getByText('frontend')).toBeInTheDocument();
  })
});