import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import CountDownTimer from './index';

describe('CountDownTimer', () => {
  it('renders without crashing', () => {
    const { container } = render(<CountDownTimer dateTime="2020-07-25T21:22:19Z"/>)
    expect(container).toBeTruthy();
  });
});