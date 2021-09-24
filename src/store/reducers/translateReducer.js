import {
  ACTION_TRANSLATE_CLEAR,
  ACTION_TRANSLATE_ERROR,
  ACTION_TRANSLATE_SET,
  ACTION_TRANSLATE_SUCCESS,
} from "../actions/translateActions";

const initialState = {
  translation: [],
  error: "",
};

export const translateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TRANSLATE_SET:
      return {
        ...state,
        translation: action.payload,
      };
    case ACTION_TRANSLATE_CLEAR:
      return {
        ...initialState,
      };
    case ACTION_TRANSLATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION_TRANSLATE_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
