import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza botão e link', () => {
  render(<App />);
  expect(screen.getByText('Chamar API')).toBeInTheDocument();
  expect(screen.getByText('Link de exemplo')).toBeInTheDocument();
});
