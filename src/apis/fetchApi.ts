import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export const fetchApi = (
  options: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios(options)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        return resolve(err);
      });
  });
};
