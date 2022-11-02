import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", () => {

  beforeEach(async () => {
    await render(<App />);
  });

  it('has header', () => {
    expect(screen.getByText('Jonas Ermann .NET Full Stack Developer')).toBeInTheDocument();
  });
});