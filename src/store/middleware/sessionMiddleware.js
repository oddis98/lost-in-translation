import {
  ACTION_SESSION_DELETE,
  ACTION_SESSION_INIT,
  ACTION_SESSION_SET,
  sessionSetAction,
} from "../actions/sessionActions";

export const sessionMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    /**
     * Checks if a session exists in localStorage, if not; do nothing.
     * If there is a session, set the session to the current session.
     */
    if (action.type === ACTION_SESSION_INIT) {
      const storedSession = localStorage.getItem("lit-ss");
      if (!storedSession) {
        return;
      }
      const session = JSON.parse(storedSession);
      dispatch(sessionSetAction(session));
    }

    // Sets the session with a user from action.payload
    if (action.type === ACTION_SESSION_SET) {
      localStorage.setItem("lit-ss", JSON.stringify(action.payload));
    }

    // Clears session.
    if (action.type === ACTION_SESSION_DELETE) {
      localStorage.clear();
    }
  };
