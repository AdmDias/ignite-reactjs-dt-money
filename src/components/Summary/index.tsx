import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { priceFormatter } from '../../utils/formatter';
import { useSummary } from '../../hooks/useSummary';

export function Summary() {
    const { inbound, outbound, total } = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E"/>
                </header>

                <strong>{ priceFormatter.format(inbound) }</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68"/>
                </header>

                <strong>{ priceFormatter.format(outbound) }</strong>
            </SummaryCard>

            <SummaryCard colorvariant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>{ priceFormatter.format(total) }</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}