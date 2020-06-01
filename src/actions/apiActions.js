import axios from 'src/utils/axios';

export const getAPI = (url) => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};
