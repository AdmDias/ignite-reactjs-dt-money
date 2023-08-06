import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

interface SummaryCardProps {
    colorvariant ?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme['gray-600']};
    border-radius: 6px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: ${props => props.theme['gray-300']};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 1.8rem;

        @media screen and (max-width: 768px) {
            font-size: 1.4rem;
        }
    }

    ${props => props.colorvariant === 'green' && css`
        background: ${props.theme['green-700']};
    `};
`;