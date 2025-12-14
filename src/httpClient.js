import axios from 'axios';
import { baseUrl, timeout } from '../tests/config/config.js';

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  validateStatus: () => true,
});

export default apiClient;
