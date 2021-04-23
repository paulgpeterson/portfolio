import React, { useContext, useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import { HOME } from '../constants/navigation';
import { NAVIGATE, TOGGLE_MENU } from '../constants/action-names';

const initialState = {
  location: HOME,
  showMenu: false
};

function reducer(state, action) {
  console.log({ state, action });
  switch (action.type) {
    case NAVIGATE:
      return { ...state, location: action.payload };
    case TOGGLE_MENU:
      return { ...state, showMenu: !state.showMenu };
    default:
      return state;
  }
}

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node
};

export const useStore = () => useContext(StoreContext);
