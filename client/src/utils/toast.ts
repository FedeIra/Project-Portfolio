import toast from 'react-hot-toast';
import type { ToastStatus } from './types';

interface ShowToastOptions {
  title?: string;
  description: string;
  status: ToastStatus;
  duration?: number;
}

export const showToast = ({ title, description, status, duration = 3000 }: ShowToastOptions) => {
  const message = title ? `${title} ${description}` : description;

  switch (status) {
    case 'success':
      toast.success(message, { duration });
      break;
    case 'error':
      toast.error(message, { duration });
      break;
    case 'loading':
      toast.loading(message, { duration });
      break;
    default:
      toast(message, { duration });
  }
};
