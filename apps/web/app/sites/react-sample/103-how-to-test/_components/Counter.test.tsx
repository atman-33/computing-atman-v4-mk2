/* test code 
Arrage - Act - Assertion

1. Arrage: set up
2. Act: run
3. Assertion: check

*/

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Counter from './Counter';

test('if count + 1 when click button', () => {
  // Arrage
  // const { debug } = render(
  render(
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );

  const spanElBeforeUpdate = screen.getByText('Current Count:0');
  expect(spanElBeforeUpdate).toBeInTheDocument();

  // Act
  const btn = screen.getByRole('button', { name: 'Count up' });
  // debug(btn);
  fireEvent.click(btn);

  // Assertion
  const spanEl = screen.getByText('Current Count:1');
  // debug(spanEl);
  expect(spanEl).toBeInTheDocument();
});
