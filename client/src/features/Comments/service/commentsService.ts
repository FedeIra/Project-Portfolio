import axiosInstance from '../../../lib/axios/axiosInstance';
import type { Comment } from '../../../utils/types';

export const fetchComments = () => axiosInstance.get<Comment[]>('/comments');

export const postComment = (commentData: Omit<Comment, '_id'>, token: string) =>
  axiosInstance.post<Comment>('/comments', commentData, {
    headers: { Authorization: `Bearer ${token}` },
  });
