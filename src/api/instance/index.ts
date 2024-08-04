import { QueryClient } from '@tanstack/react-query';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { servers } from '../constants';

const SESSION_STORAGE_KEY = 'selectedServer';

let axiosInstance: AxiosInstance | null = null;
let currentBaseURL = servers[sessionStorage.getItem(SESSION_STORAGE_KEY)!];

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });

  return instance;
};

export const setBaseURL = (baseURL: string) => {
  currentBaseURL = baseURL;
  axiosInstance = initInstance({ baseURL });
};

export const getInstance = (): AxiosInstance => {
  if (!axiosInstance) {
    setBaseURL(currentBaseURL);
  }
  return axiosInstance!;
};

export const getBaseURL = () => currentBaseURL;
export const fetchInstance = getInstance();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});
