import React from 'react';
import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main', () => {
  it('renders the main portfolio page', () => {
    render(<Main />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
