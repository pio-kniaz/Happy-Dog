/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import { config } from '@config';
import AuthService from '@/services/AuthService';

export const api = axios.create({
  withCredentials: true,
  baseURL: config.API_URL,
  timeout: 20 * 100,
});

// for multiple requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const accessToken = localStorage.getItem('access_token');
if (accessToken) {
  api.defaults.headers.common = { Authorization: `Bearer ${accessToken}` };
}

api.interceptors.response.use((response) => response, (error) => {
  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      }).catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    return new Promise((resolve, reject) => {
      api.post('auth/refresh-token')
        .then(({ data }) => {
          const newAccessToken = data.data.accessToken;
          AuthService.signUser(newAccessToken);
          api.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          processQueue(null, newAccessToken);
          resolve(axios(originalRequest));
        })
        .catch((err) => {
          AuthService.signOut();
          processQueue(err, null);
          reject(err);
          window.location = '/';
        })
        .finally(() => { isRefreshing = false; });
    });
  }

  return Promise.reject(error);
});
