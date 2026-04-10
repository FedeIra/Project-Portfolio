import axiosInstance from '../../../lib/axios/axiosInstance';

export const downloadFile = (token: string, fileName: string) =>
  axiosInstance.get(`/downloadFile/${encodeURIComponent(fileName)}`, {
    headers: { Authorization: `Bearer ${token}` },
    responseType: 'blob',
  });
