import { ACTION_TRANSLATE_SET } from "../actions/translateActions";

const initialState = {
  translation: [],
};

export const translateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TRANSLATE_SET:
      return {
        ...state,
        translation: action.payload,
      };
    default:
      return state;
  }
};
