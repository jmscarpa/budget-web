export interface Transaction {
    id: number;
    value: number;
    description: string;
    paid_at: Date;
    kind: TransactionKind;
    category_name: string;
}

export interface TransactionIndex{
    budget: number;
    transactions: Transaction[];
}

export interface TransactionKind{
    id: string;
    name: string;
}

export interface TrnsactionCategories{
    transaction_categories: TransactionCategory[];
}

export interface TransactionNew{
    kinds: TransactionKind[];
    categories: TransactionCategory[];
}
export interface TransactionEdit{
    kinds: TransactionKind[];
    categories: TransactionCategory[];
    transaction: Transaction;
}

export interface TransactionCategory{
    id: number;
    name: string;
}