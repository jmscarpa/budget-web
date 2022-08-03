
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

interface TransactionType{
    id: number;
    name: string;
}