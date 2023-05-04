import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações" required />

            <button type="submit">
                <MagnifyingGlass size={32} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}