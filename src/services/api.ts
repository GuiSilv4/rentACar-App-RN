import axios from 'axios';
import { Platform } from 'react-native';

const ip = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

const api = axios.create({
  baseURL: `http://${ip}:3333`,
});

export default api;
