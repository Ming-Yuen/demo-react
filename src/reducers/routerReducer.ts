import { CHANGE_ROUTE } from '../actions/actionTypes';

const initialState = {
  route: '/'
};

const routerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        ...state,
        route: action.payload.route
      };
    default:
      return state;
  }
};

export default routerReducer;