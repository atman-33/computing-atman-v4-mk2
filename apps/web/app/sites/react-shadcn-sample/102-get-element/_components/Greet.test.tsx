import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

it('should have h1 tag', () => {
  // const { debug, container } = render(<Greet />);
  const { container } = render(<Greet />);

  // const h1El = screen.getByText('Hello');
  // expect(h1El).toBeInTheDocument();

  // const radioEl = screen.getByRole('radio');
  // debug(radioEl);
  // expect(radioEl).toBeInTheDocument();

  // const imgEl = screen.getByRole('img');
  // debug(imgEl);

  // const headingEl = screen.getByRole('heading', { name: 'Hello' });
  // debug(headingEl);
  const h2El = container.querySelector('h2');
  // h2El && debug(h2El);
  expect(h2El).toBeInTheDocument();

  // const elByLabel = screen.getByLabelText('Full Name');
  // debug(elByLabel);

  const elByPlaceholder = screen.getByPlaceholderText('Enter Full Name');
  // debug(elByPlaceholder);
  expect(elByPlaceholder).toBeInTheDocument();
});
