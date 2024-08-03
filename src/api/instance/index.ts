import { QueryClient } from '@tanstack/react-query';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { servers } from '../constants';

const SESSION_STORAGE_KEY = 'selectedServer';

let axiosInstance: AxiosInstance | null = null;
let currentBaseURL =
  servers[sessionStorage.getItem(SESSION_STORAGE_KEY)!] || 'http://43.202.48.64:8080';

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    baseURL: currentBaseURL,
    timeout: 5000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
    withCredentials: true,
  });

  console.log(currentBaseURL);
  // 동혁님용 인터셉터 추가
  instance.interceptors.request.use(
    (request) => {
      // 특정 도메인에 대해서만 Authorization 헤더 추가
      if (request.url && request.url.startsWith('http://43.203.225.165:8080')) {
        // const token = localStorage.getItem('authToken');
        const token =
          'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJrYWthbzFAa2FrYW8uY29tIiwic29jaWFsVG9rZW4iOiIiLCJzb2NpYWxUeXBlIjoiT1RIRVIiLCJpYXQiOjE3MjI1OTc1NzUsImV4cCI6MTcyMjYwMTE3NX0.s0boyorD_6G7jmGq8TqGjFPfeSn_hx_87q-aK75AZpU';
        if (token) {
          request.headers.Authorization = `Bearer ${token}`;
        }
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

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
