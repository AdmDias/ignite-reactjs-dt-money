import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Transação</td>
                            <td>
                                <PriceHighlight typeTransactionVariant="inbound">
                                    R$ 1.200,00
                                </PriceHighlight>
                            </td>
                            <td>Tipo A</td>
                            <td>02/05/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Transação</td>
                            <td>
                                <PriceHighlight typeTransactionVariant="outbound">
                                    -R$ 1.200,00
                                </PriceHighlight>
                            </td>
                            <td>Tipo B</td>
                            <td>02/05/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
                
            </TransactionsContainer>
        </div>
    )
}