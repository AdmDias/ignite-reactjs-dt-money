import { useContext } from "react"
import { TransactionContext } from "../../contexts/TransactionContext";
import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSquema = zod.object({
    query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSquema>

export function SearchForm() {
    const { fetchTransactions } = useContext(TransactionContext)


    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting }
     } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSquema)
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações" 
                required 
                { ...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={32} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}