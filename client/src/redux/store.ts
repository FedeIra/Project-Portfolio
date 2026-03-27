import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/Auth/state/authSlice';
import commentsSlice from '../features/Comments/state/commentsSlice';
import emailSlice from '../features/Contact/state/emailSlice';
import fileSlice from '../features/Portfolio/state/fileSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    comments: commentsSlice,
    email: emailSlice,
    file: fileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
