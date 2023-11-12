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

describe('Counter test', () => {
  test('initial count is 0', () => {
    render(
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    );

    const spanElBeforeUpdate = screen.getByText('Current Count:0');
    // debug(spanElBeforeUpdate);
    expect(spanElBeforeUpdate).toBeInTheDocument();
  });

  test('if count + 1 when click button', () => {
    // Arrage
    render(
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    );

    // Act
    const btn = screen.getByRole('button', { name: 'Count up' });
    fireEvent.click(btn);

    // Assertion
    const spanEl = screen.getByText('Current Count:1');
    expect(spanEl).toBeInTheDocument();
  });
});
