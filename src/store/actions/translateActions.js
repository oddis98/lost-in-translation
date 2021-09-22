export const ACTION_TRANSLATE_SET = "[translate] SET";
export const ACTION_TRANSLATE_ERROR = "[translate] ERROR";
export const ACTION_TRANSLATE_SUCCESS = "[translate] SUCCESS";

export const translateSetAction = (translation) => ({
  type: ACTION_TRANSLATE_SET,
  payload: translation,
});

export const translateErrorAction = (error) => ({
  type: ACTION_TRANSLATE_ERROR,
  payload: error,
});

export const translateSuccessAction = (success) => ({
  type: ACTION_TRANSLATE_SUCCESS,
  payload: success,
});
