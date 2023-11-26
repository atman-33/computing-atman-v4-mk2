import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

// functions of it and test are same.

it('should have h1 tag', () => {
  render(<Greet />);
  const h1El = screen.getByText('Hello');
  expect(h1El).toBeInTheDocument();
});

// test('if h1 tag exists', () => {
//   render(<Greet />);
//   const h1El = screen.getByText('Good Afternoon');
//   expect(h1El).toBeInTheDocument();
// });
