interface User {
    name: string;
    lastname: string;
    email: string;
    password: string;
    verifyPassword: string;
}

export interface Budget {
    id: number;
    user_id: number;
    currentDate: string;
    totalExpenses: number;
    totalIncome: number;
    balance: number;
}

export interface Transaction {
    name: string;
    description: string;
    transactionType_id: number;
    transactionCategory_id: number;
    user_id: number;
    amount: number;
    date: string;
    installment: number;
}

interface TransactionType {
    id: number;
    name: string;
    description: string;
}

export interface TransactionCategory {
    id: number;
    name: string;
    description: string;
}
