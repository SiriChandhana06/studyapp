import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000', 
});

export default AxiosInstance;