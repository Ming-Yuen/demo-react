import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'your_api_url_here';

export const AuthService = {
  login: async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    const { token, refreshToken } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    return token;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  },

  refreshToken: async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    const response = await axios.post(`${API_URL}/refresh-token`, { refreshToken });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return token;
  },

  isTokenExpired: (token: string) => {
    try {
      const decoded: any = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      return false;
    } catch (error) {
      return true;
    }
  },
};