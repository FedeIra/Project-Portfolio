// External packages:
import { parseISO, differenceInMinutes } from "date-fns";

// Internal packages:
import { store } from "../../store";
import { refreshToken, logOut } from "../../actions/index.js";

// Function to refresh token or logout user according token expiration:
export const refreshTokenBeforeExpiration = () => {
  const state = store.getState();

  const { user } = state;
  const { expiration, token, username } = user;

  if (!expiration || !token || !username) {
    return;
  }

  const now = new Date();

  const expiryDate = parseISO(expiration);

  let minutesToExpire = differenceInMinutes(expiryDate, now);

  if (minutesToExpire <= 5 && minutesToExpire > 0) {
    store.dispatch(refreshToken(token));
  } else if (minutesToExpire <= 0) {
    store.dispatch(logOut());
  }
  return;
};
