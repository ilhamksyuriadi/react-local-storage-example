import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text Website Admin', () => {
  render(<App />);
  const linkElement = screen.getByText(/Website Admin/i);
  expect(linkElement).toBeInTheDocument();
});
