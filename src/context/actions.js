import { NAVIGATE, TOGGLE_MENU } from '../constants/action-names';

export const navigate = (payload) => ({ type: NAVIGATE, payload });
export const toggleMenu = (payload) => ({ type: TOGGLE_MENU, payload });
