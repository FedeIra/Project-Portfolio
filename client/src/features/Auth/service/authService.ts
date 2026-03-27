import axiosInstance from '../../../lib/axios/axiosInstance';
import type { AuthCredentials, User } from '../../../utils/types';

export const loginRequest = (credentials: AuthCredentials) =>
  axiosInstance.post<User>('/login', credentials);

export const signupRequest = (credentials: AuthCredentials) =>
  axiosInstance.post<User>('/sign-up', credentials);

export const refreshTokenRequest = (token: string) =>
  axiosInstance.post<{ token: string }>('/refresh-token', { token });
