export interface User {
  expiration: string | null;
  token: string | null;
  username: string | null;
}

export interface Comment {
  _id: string;
  username: string;
  content: string;
  date: string;
  commentId?: number;
  token?: string;
}

export interface EmailForm {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface Technology {
  name: string;
  avatar: string;
}

export interface MinorProject {
  name: string;
  technologies: string[];
  avatar: string;
  link: string;
}

export interface Course {
  date: string;
  title: string;
  description: string;
  picture: string;
  key?: string;
}

export type ToastStatus = 'success' | 'error' | 'loading';
