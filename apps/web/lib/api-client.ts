import { NEXT_PUBLIC_API_ENDPOINT } from '@/config/index';
import axios from 'axios';

if (!NEXT_PUBLIC_API_ENDPOINT) {
  throw new Error('NEXT_PUBLIC_API_ENDPOINT is undefined');
}

export const apiClient = axios.create({
  baseURL: NEXT_PUBLIC_API_ENDPOINT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
