import { LoginAPI } from '../../api/LoginAPI';
import {
  ACTION_SESSION_DELETE,
  sessionSetAction
} from '../actions/sessionActions';
import {
  ACTION_TRANSLATE_CLEAR,
  ACTION_TRANSLATE_DELETE,
  ACTION_TRANSLATE_SET,
  translateErrorAction,
  translateSuccessAction
} from '../actions/translateActions';

export const translateMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === ACTION_TRANSLATE_SET) {
      try {
        const storedSession = localStorage.getItem('lit-ss');
        const session = JSON.parse(storedSession);
        await LoginAPI.updateTranslations(session.id, [
          ...session.translations,
          action.payload
        ]);
        const user = await LoginAPI.login({ username: session.username });
        dispatch(sessionSetAction(user[0]));
        dispatch(translateSuccessAction(action.payload));
      } catch (e) {
        dispatch(translateErrorAction(action.payload));
      }
    }
    if (action.type === ACTION_TRANSLATE_DELETE) {
      try {
        const storedSession = localStorage.getItem('lit-ss');
        const session = JSON.parse(storedSession);
        await LoginAPI.updateTranslations(session.id, []);

        const user = await LoginAPI.login({ username: session.username });
        dispatch(sessionSetAction(user[0]));
        dispatch(translateSuccessAction(action.payload));
      } catch (e) {
        dispatch(translateErrorAction(action.payload));
      }
    }
  };
