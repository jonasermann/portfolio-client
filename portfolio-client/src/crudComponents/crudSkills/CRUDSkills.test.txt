import { fireEvent, render, screen } from '@testing-library/react';
import MockCRUDSkills from '../mock/MockCRUDSkills';

describe("CRUDSkillss Component", () => {

  beforeEach(() => {
    render(<MockCRUDSkills />)
  });

  it('adds an empty skill', () => {
    expect(screen.getAllByTestId('skill')).toHaveLength(12);
    fireEvent.click(screen.getByText('Add Skill'));
    expect(screen.getAllByTestId('skill')).toHaveLength(13);
    fireEvent.click(screen.getByTestId('delete12'));
    expect(screen.getAllByTestId('skill')).toHaveLength(12);
  })

});