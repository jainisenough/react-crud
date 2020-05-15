import axios from 'axios';

const axiosIns = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});
export const get = (url, config = {}) => axiosIns.get(url, config);
export const post = (url, data, config = {}) => axiosIns.post(url, data, config);
export const put = (url, data, config = {}) => axiosIns.put(url, data, config);
export const remove = (url, config = {}) => axiosIns.delete(url, config);
export const head = (url, config = {}) => axiosIns.head(url, config);
