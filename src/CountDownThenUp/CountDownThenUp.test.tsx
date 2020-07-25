import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import CountDownThenUp from './index';

describe('CountDownThenUp', () => {
  it('renders without crashing', () => {
    const {container } = render(<CountDownThenUp />)
    expect(container).toBeTruthy();
  });
});
