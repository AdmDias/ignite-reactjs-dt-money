import { createContext, useState, useEffect } from 'react'
import { api } from '../lib/axios';

export interface Transaction {
    id: string;
    description: string;
    type: "inbound" | "outbound";
    category: string;
    price: number,
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionProviderProps {
    children: React.ReactNode;
}

interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'inbound'| 'outbound';
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string) {
        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        })

        setTransactions(response.data)
    }

    async function createTransaction(newData: CreateTransactionInput) {
        const { description, price, category, type } = newData

        const { data } = await api.post<Transaction>('transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        })

        setTransactions((state) => [data, ...state])
    }

    useEffect(() => {
        fetchTransactions()
    }, []);

    return (
        <TransactionContext.Provider value={{ 
            transactions: transactions,
            fetchTransactions,
            createTransaction
        }}>
            { children }
        </TransactionContext.Provider>
    )
}