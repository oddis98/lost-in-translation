import {
  ACTION_SESSION_DELETE,
  ACTION_SESSION_SET
} from '../actions/sessionActions';

const initialState = {
  username: '',
  id: '',
  translations: [],
  loggedIn: false
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SESSION_SET:
      return {
        ...action.payload,
        loggedIn: true
      };
    case ACTION_SESSION_DELETE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
