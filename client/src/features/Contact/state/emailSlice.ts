import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendEmailRequest } from '../service/emailService';
import type { EmailForm } from '../../../utils/types';

interface EmailState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: EmailState = {
  loading: false,
  error: null,
  success: false,
};

export const sendEmailAsync = createAsyncThunk<void, EmailForm, { rejectValue: string }>(
  'email/send',
  async (form, { rejectWithValue }) => {
    try {
      await sendEmailRequest(form);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    resetEmailState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmailAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendEmailAsync.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendEmailAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to send email';
      });
  },
});

export const { resetEmailState } = emailSlice.actions;
export default emailSlice.reducer;
