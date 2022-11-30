export interface IAuth {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    bankaccount: any[];
    transactions: any[];
}

export interface IAuthLogin {
    email: string,
    password: string
}

export interface IAuthRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface IAuthPost {

}

