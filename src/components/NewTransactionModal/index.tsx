import { Portal, Title } from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as zod from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from '../../lib/axios'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionContext'


const newTransactionFormSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(['inbound', 'outbound'])
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionContext)

    const {
        control,
        register,
        handleSubmit,
        formState: {
            isSubmitting, 
            //errors
        },
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'inbound'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        try {
            await createTransaction({
                ...data
            })
            reset()
        } catch (error: any) {
            console.log(error.message)
        }
    }

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

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        type='text' 
                        placeholder='Descrição' 
                        required  
                        { ...register('description')} 
                    />
                    <input 
                        type='number' 
                        placeholder='Preço' 
                        required  
                        { ...register('price', { valueAsNumber: true })} 
                    />
                    <input 
                        type='text' 
                        placeholder='Categoria' 
                        required  
                        { ...register('category')} 
                    />

                    <Controller 
                        control={control}
                        name='type'
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant='inbound' value='inbound'>
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant='outbound' value='outbound'>
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    /> 

                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Portal>
    )
}