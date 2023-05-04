import { Portal, Title } from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
    return (
        <Portal>
            <Overlay />

            <Content>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                
                <Title>
                    Nova transação
                </Title>

                <form>
                    <input type='text' placeholder='Descrição' required />
                    <input type='number' placeholder='Preço' required />
                    <input type='text' placeholder='Categoria' required />

                    <TransactionType>
                        <TransactionTypeButton variant='inbound' value='inbound'>
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton variant='outbound' value='outbound'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Portal>
    )
}