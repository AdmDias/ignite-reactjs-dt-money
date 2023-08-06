import { useContext } from 'react'
import { TransactionContext } from "../contexts/TransactionContext"

export function useSummary() {
    const { transactions } = useContext(TransactionContext)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'inbound') {
                acc.inbound += transaction.price
                acc.total += transaction.price
            } else {
                acc.outbound += transaction.price
                acc.total -= transaction.price
            }
            return acc
        }, {
            inbound: 0,
            outbound: 0,
            total: 0
        }
    )

    return summary
}