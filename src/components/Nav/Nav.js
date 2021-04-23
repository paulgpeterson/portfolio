import React, { useState } from 'react';
import { css } from '@emotion/css';

import { useStore } from '../../context/store-provider';
import { HOME, PROJECTS, BLOG, CONTACT } from '../../constants/navigation';
import { navigate } from '../../context/actions';

export const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { dispatch } = useStore();

  const toggleMenu = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  const menuButtonText = isVisible ? 'X' : 'Menu';

  return (
    <>
      <button onClick={toggleMenu}>{menuButtonText}</button>
      {isVisible && (
        <nav>
          <ul className={listStyles}>
            <li>
              <button onClick={() => dispatch(navigate(HOME))}>Home</button>
            </li>
            <li>
              <button onClick={() => dispatch(navigate(PROJECTS))}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => dispatch(navigate(BLOG))}>Blog</button>
            </li>
            <li>
              <button onClick={() => dispatch(navigate(CONTACT))}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

const listStyles = css`
  display: flex;
  flex-direction: row;
  list-style: none;
`;
