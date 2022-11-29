import axios, { AxiosResponse } from 'axios';
import { IAuth, IAuthLogin, IAuthPost } from '../../models/Auth';

const baseURL = 'http://localhost:8000/api/'

const instance = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    withCredentials: true,
});

const postInstance = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, config?: {}) => instance.get(url, config).then(responseBody),
    post: (url: string, body?: {}, config?: {}) => postInstance.post(url, body, config).then(responseBody),
    put: (url: string, body: {}) => postInstance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(response => response),
};

export const Auth = {
    login: (credentials: IAuthLogin): Promise<IAuth> => requests.post('login', credentials),
    register: (credentials: IAuthPost): Promise<IAuthPost> => requests.post('register', credentials),
    refresh: (): Promise<IAuth> => requests.post('refresh'),
    user: (): Promise<IAuth> => requests.get('user'),
    logout: (): Promise<IAuth> => requests.post('logout'),
};