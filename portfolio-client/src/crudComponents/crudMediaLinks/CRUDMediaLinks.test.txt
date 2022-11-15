import { fireEvent, render, screen } from '@testing-library/react';
import MockCRUDMediaLinks from '../mock/MockCRUDMediaLinks';

describe("CRUDMediaLinks Component", () => {

  beforeEach(() => {
    render(<MockCRUDMediaLinks />)
  });

  it('adds an empty media link', () => {
    expect(screen.getAllByTestId('mediaLink')).toHaveLength(2);
    fireEvent.click(screen.getByText('Add Icon Description'));
    expect(screen.getAllByTestId('mediaLink')).toHaveLength(3);
    fireEvent.click(screen.getByTestId('delete2'));
    expect(screen.getAllByTestId('mediaLink')).toHaveLength(2);
  })

});