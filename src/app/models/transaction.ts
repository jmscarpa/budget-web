export interface Transaction {
    id: number;
    value: number;
    description: string;
    transaction_date: Date;
    transaction_type: TransactionType;
}

export interface TransactionIndex{
    budget: number;
    transactions: Transaction[];
}

export interface TransactionType{
    id: number;
    name: string;
}

export interface TransactionTypes{
    transaction_types: TransactionType[];
}

export interface TransactionNew{
    transaction_types: TransactionType[];
    transaction: Transaction;
}

export interface TransactionCategory{
    id: number;
    name: string;
}