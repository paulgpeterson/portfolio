import React from 'react';
import { css } from '@emotion/css';

import { colors } from '../../styling/colors';
import { Nav } from '../Nav/Nav';

export const Header = () => {
  return (
    <header className={headerStyles}>
      <Nav />
    </header>
  );
};

const headerStyles = css`
  width: 100%;
  height: 60px;
  background-color: ${colors.background};
`;
