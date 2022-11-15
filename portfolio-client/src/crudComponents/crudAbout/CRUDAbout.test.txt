import { fireEvent, render, screen } from '@testing-library/react';
import MockCRUDAbout from '../mock/MockCRUDAbout';

describe("CRUDAbout Component", () => {

  beforeEach(() => {
    render(<MockCRUDAbout />)
  });

  it('adds an empty paragraph', () => {
    expect(screen.getAllByTestId('backgroundParagraph')).toHaveLength(4);
    fireEvent.click(screen.getByText('Add Paragraph'));
    expect(screen.getAllByTestId('backgroundParagraph')).toHaveLength(5);
    fireEvent.click(screen.getByTestId('delete4'));
    expect(screen.getAllByTestId('backgroundParagraph')).toHaveLength(4);
  })

});