import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewTransactionButton = styled.button`
    border: 0;
    border-radius: 6px;
    background: ${props => props.theme['green-500']};
    height: 50px;
    padding: 0 1.25rem;
    cursor: pointer;

    font-weight: bold;
    color: ${props => props.theme.white};

    &:hover {
        background: ${props => props.theme['green-700']};
        transition: background-color 0.3s;
    }
`;