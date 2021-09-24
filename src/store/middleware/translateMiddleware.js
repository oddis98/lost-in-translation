import { LoginAPI } from "../../api/LoginAPI";
import { sessionSetAction } from "../actions/sessionActions";
import {
  ACTION_TRANSLATE_DELETE,
  ACTION_TRANSLATE_SET,
  translateErrorAction,
  translateSuccessAction,
} from "../actions/translateActions";

export const translateMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    /**
     * Gets session from localStorage.
     * Updates the translations for the currently logged in user in the databse with the values from the session.translations array
     * and includes a new translation to be added.
     *
     * Gets the user with the updated values for translation from the database, and then updates the session with that user.
     *
     * If an error occurs dispatch translateErrorAction
     */
    if (action.type === ACTION_TRANSLATE_SET) {
      try {
        const storedSession = localStorage.getItem("lit-ss");
        const session = JSON.parse(storedSession);
        await LoginAPI.updateTranslations(session.id, [
          ...session.translations,
          action.payload,
        ]);
        const user = await LoginAPI.login({ username: session.username });
        dispatch(sessionSetAction(user[0]));
        dispatch(translateSuccessAction(action.payload));
      } catch (e) {
        dispatch(translateErrorAction(action.payload));
      }
    }

    /**
     * Gets session form localStorage.
     *
     * Updates the translations for the logged in user to be an empty array.
     *
     * Gets the user from the database and updates session to include the new (empty) array from the database.
     *
     * If an error occurs dispatch translateErrorAction
     */
    if (action.type === ACTION_TRANSLATE_DELETE) {
      try {
        const storedSession = localStorage.getItem("lit-ss");
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
