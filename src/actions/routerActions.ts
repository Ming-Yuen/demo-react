import { CHANGE_ROUTE } from './actionTypes';

export const changeRoute = (route: string) => ({
  type: CHANGE_ROUTE,
  payload: {
    route
  }
});