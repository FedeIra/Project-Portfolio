import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComments, postComment } from '../service/commentsService';
import type { Comment } from '../../../utils/types';

interface CommentsState {
  comments: Comment[];
  loading: boolean;
  postLoading: boolean;
  error: string | null;
  postError: string | null;
}

const initialState: CommentsState = {
  comments: [],
  loading: false,
  postLoading: false,
  error: null,
  postError: null,
};

export const getCommentsAsync = createAsyncThunk<Comment[]>(
  'comments/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchComments();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const postCommentAsync = createAsyncThunk<
  Comment,
  { commentData: Omit<Comment, '_id'>; token: string },
  { rejectValue: string }
>('comments/post', async ({ commentData, token }, { rejectWithValue }) => {
  try {
    const { data } = await postComment(commentData, token);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCommentsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getCommentsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(postCommentAsync.pending, (state) => {
        state.postLoading = true;
        state.postError = null;
      })
      .addCase(postCommentAsync.fulfilled, (state, action) => {
        state.postLoading = false;
        state.comments = [action.payload, ...state.comments];
      })
      .addCase(postCommentAsync.rejected, (state, action) => {
        state.postLoading = false;
        state.postError = action.payload ?? 'Failed to post comment';
      });
  },
});

export default commentsSlice.reducer;
