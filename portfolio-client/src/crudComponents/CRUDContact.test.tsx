import { fireEvent, render, screen } from '@testing-library/react';
import MockCRUDContact from '../mock/MockCRUDContact';

describe("CRUDContact Component", () => {

  beforeEach(() => {
   render(<MockCRUDContact />)
  });

  it('adds an empty contact', () => {
    expect(screen.getAllByTestId('contact')).toHaveLength(2);
    fireEvent.click(screen.getByText('Add Contact'));
    expect(screen.getAllByTestId('contact')).toHaveLength(3);
    fireEvent.click(screen.getByTestId('delete2'));
    expect(screen.getAllByTestId('contact')).toHaveLength(2);
  })

});