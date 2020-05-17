import React from 'react';
import { render, fireEvent } from '../../../../test-utils';
import Login from './';

describe('App', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  test('allows the user to login successfully', async () => {
    const { getByName, getByType } = render(<Login />);

    // fill out the form
    fireEvent.change(getByName('email'), {
      target: { value: 'admin@admin.com' }
    });
    fireEvent.change(getByName('password'), {
      target: { value: 'admin' }
    });

    fireEvent.click(getByType('submit'));

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('app/X-Access-Token', 'my-access-token');
  });
});
