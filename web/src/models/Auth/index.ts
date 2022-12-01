export interface Bankaccount {
    id:                  number;
    date:                Date;
    account_type:        string;
    user:                number;
    account_balance:     number;
    accounttransactions: any[];
}

export interface IAuth {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    bankaccount:  Bankaccount[];
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

