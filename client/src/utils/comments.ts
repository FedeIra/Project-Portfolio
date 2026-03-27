import type { Comment } from './types';

const createDate = (): string => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const createComment = (
  token: string | null,
  username: string,
  content: string,
): Omit<Comment, '_id'> => ({
  date: createDate(),
  commentId: Math.random(),
  token: token ?? undefined,
  username,
  content,
});

export const validateMinLength = (str: string, min = 5): boolean => {
  return str.length < min;
};
