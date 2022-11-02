import { render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { mockAppProps } from '../mock/data';
import MediaLinks from './MediaLinks';

const MockAppContext = createContext<IAppProps>({} as IAppProps);

describe("MediaLinks Component", () => {

  beforeEach(() => {
    render(
      <MockAppContext.Provider value={mockAppProps}>
        <MediaLinks context={MockAppContext} />);
      </MockAppContext.Provider>
    )
  });

  it('has MediaLinks', () => {
    expect(screen.getByText('media link 1')).toBeInTheDocument();
    expect(screen.getByText('media link 1')).toBeInTheDocument();
  });
});