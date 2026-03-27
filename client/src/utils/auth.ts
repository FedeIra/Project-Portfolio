import { parseISO, differenceInMinutes } from 'date-fns';
import { store } from '../redux/store';
import { refreshTokenAsync, logout } from '../features/Auth/state/authSlice';

export const refreshTokenBeforeExpiration = (): void => {
  const state = store.getState();
  const { user } = state.auth;
  const { expiration, token, username } = user;

  if (!expiration || !token || !username) {
    return;
  }

  const now = new Date();
  const expiryDate = parseISO(expiration);
  const minutesToExpire = differenceInMinutes(expiryDate, now);

  if (minutesToExpire <= 5 && minutesToExpire > 0) {
    void store.dispatch(refreshTokenAsync(token));
  } else if (minutesToExpire <= 0) {
    store.dispatch(logout());
  }
};
