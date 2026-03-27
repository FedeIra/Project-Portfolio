import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { downloadFile } from '../service/fileService';

interface FileState {
  loading: boolean;
  error: string | null;
}

const initialState: FileState = {
  loading: false,
  error: null,
};

export const getFileAsync = createAsyncThunk<void, { token: string; fileName: string }>(
  'file/download',
  async ({ token, fileName }, { rejectWithValue }) => {
    try {
      const response = await downloadFile(token, fileName);
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      window.open(url, '_blank');
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFileAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFileAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getFileAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default fileSlice.reducer;
