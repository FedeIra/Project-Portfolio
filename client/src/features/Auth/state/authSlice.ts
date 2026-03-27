import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest, signupRequest, refreshTokenRequest } from '../service/authService';
import type { AuthCredentials, User } from '../../../utils/types';

interface AuthState {
  user: User;
  loading: boolean;
  error: string | null;
}

const loadUserFromStorage = (): User => {
  try {
    const stored = localStorage.getItem('portfolio_user');
    if (stored) return JSON.parse(stored);
  } catch {}
  return { expiration: null, token: null, username: null };
};

const saveUserToStorage = (user: User) => {
  localStorage.setItem('portfolio_user', JSON.stringify(user));
};

const clearUserFromStorage = () => {
  localStorage.removeItem('portfolio_user');
};

const initialState: AuthState = {
  user: loadUserFromStorage(),
  loading: false,
  error: null,
};

export const loginAsync = createAsyncThunk<User, AuthCredentials, { rejectValue: string }>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await loginRequest(credentials);
      saveUserToStorage(data);
      return data;
    } catch (error: any) {
      const message = error.response?.data || 'Error logging in. Please try again.';
      return rejectWithValue(message);
    }
  },
);

export const signupAsync = createAsyncThunk<User, AuthCredentials, { rejectValue: string }>(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await signupRequest(credentials);
      return data;
    } catch (error: any) {
      const message = error.response?.data || 'Error signing up. Please try again.';
      return rejectWithValue(message);
    }
  },
);

export const refreshTokenAsync = createAsyncThunk<
  { token: string },
  string,
  { rejectValue: string }
>('auth/refreshToken', async (token, { rejectWithValue }) => {
  try {
    const { data } = await refreshTokenRequest(token);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = { expiration: null, token: null, username: null };
      state.error = null;
      clearUserFromStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Login failed';
      })
      .addCase(signupAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Signup failed';
      })
      .addCase(refreshTokenAsync.fulfilled, (state, action) => {
        state.user.token = action.payload.token;
        saveUserToStorage(state.user);
      })
      .addCase(refreshTokenAsync.rejected, (state) => {
        state.user = { expiration: null, token: null, username: null };
        clearUserFromStorage();
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
