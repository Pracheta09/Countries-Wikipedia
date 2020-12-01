import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/countries wikipedia/i);
  expect(linkElement).toBeInTheDocument();
});

