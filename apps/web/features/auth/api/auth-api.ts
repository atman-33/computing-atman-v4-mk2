import { apiClient } from '@/lib/api-client';
import { apolloClient } from '@/lib/apollo-client';
import { AxiosError } from 'axios';

const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/api/auth/login', {
      email,
      password
    });

    if (response.data) {
      // console.log('Login successful:', response.data);
      return response.data;
    } else {
      // console.error('Login failed:', response.data);
      return response.data;
    }
  } catch (error: AxiosError<unknown> | any) {
    // console.log(error.response.data);
    return error.response.data;
  }
};

const logout = async () => {
  try {
    const response = await apiClient.post('/api/auth/logout');
    apolloClient.clearStore();
    return response.data;
  } catch (error: AxiosError<unknown> | any) {
    return error.response.data;
  }
};

const isAuthenticated = async () => {
  try {
    const response = await apiClient.get('/api/auth');
    return response.data;
  } catch (error: AxiosError<unknown> | any) {
    return error.response.data;
  }
};

const authApi = {
  login,
  logout,
  isAuthenticated
};

export default authApi;
