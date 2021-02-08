import axios from 'axios';

import { config } from '@config';

const token = localStorage.getItem('access_token');
if (token) {
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
}

export const api = axios.create({
  baseURL: config.API_URL,
  timeout: 20 * 100,
});
