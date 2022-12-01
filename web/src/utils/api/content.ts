import axios, { AxiosResponse } from 'axios';
import { IAuth, IAuthLogin, IAuthRegister, IAuthTransfer } from '../../models/Auth';

const apiURL = 'http://localhost:8000/'

const instance = axios.create({
    baseURL: apiURL,
    timeout: 15000,
    withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, config?: {}) => instance.get(url, config).then(responseBody),
    post: (url: string, body?: {}, config?: {}) => instance.post(url, body, config).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(response => response),
};

export const Content = {
    transfer: (transferContent: IAuthTransfer): Promise<any> => requests.post('createtransactionapi/', transferContent),
}