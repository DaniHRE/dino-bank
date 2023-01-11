import axios, { AxiosResponse } from 'axios';
import { IAuth, IAuthLogin, IAuthRegister } from '../../models/Auth';

const authURL = 'http://srv-captain--asd-banco:8000/api/'

const instance = axios.create({
    baseURL: authURL,
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

export const Auth = {
    login: (credentials: IAuthLogin): Promise<IAuth> => requests.post('login', credentials),
    register: (credentials: IAuthRegister): Promise<IAuthRegister> => requests.post('register', credentials),
    refresh: (): Promise<IAuth> => requests.post('refresh'),
    user: (): Promise<IAuth> => requests.get('user'),
    logout: (): Promise<IAuth> => requests.post('logout')
};
