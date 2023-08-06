import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { Transaction, TransactionContext } from "../../contexts/TransactionContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
    const { transactions } = useContext(TransactionContext)

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        {
                            transactions.map((item : Transaction) => {
                                return (
                                    <tr key={item.id}>
                                        <td width="50%">{ item.description }</td>
                                        <td>
                                            <PriceHighlight typetransactionvariant={item.type}>
                                                { item.type === 'outbound' && '- '}
                                                { priceFormatter.format(item.price) }
                                            </PriceHighlight>
                                        </td>
                                        <td>{ item.category }</td>
                                        <td>{ dateFormatter.format(new Date(item.createdAt)) }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </TransactionsTable>
                
            </TransactionsContainer>
        </div>
    )
}