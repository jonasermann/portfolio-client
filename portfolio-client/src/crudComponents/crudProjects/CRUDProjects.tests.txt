import { fireEvent, render, screen } from '@testing-library/react';
import MockCRUDProjects from '../mock/MockCRUDProjects';

describe("CRUDProjects Component", () => {

  beforeEach(() => {
    render(<MockCRUDProjects />)
  });

  it('adds an empty project', () => {
    expect(screen.getAllByTestId('project')).toHaveLength(5);
    fireEvent.click(screen.getByText('Add Project'));
    expect(screen.getAllByTestId('project')).toHaveLength(6);
    fireEvent.click(screen.getByTestId('delete5'));
    expect(screen.getAllByTestId('project')).toHaveLength(5);
  })

});