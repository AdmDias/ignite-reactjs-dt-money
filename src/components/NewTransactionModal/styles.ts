import styled from "styled-components" 
import { Overlay as RadixOverlay, Content as RadixContent, Close as RadixClose } from '@radix-ui/react-dialog'
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(RadixOverlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`;

export const CloseButton = styled(RadixClose)`
    cursor: pointer;
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    color: ${props => props.theme['gray-500']};
`;

export const Content = styled(RadixContent)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 32rem;
    padding: 2.5rem 3rem;
    border-radius: 6px;
    background: ${props => props.theme['gray-800']};

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border: 0;
            border-radius: 6px;
            background: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }
        }

        button[type="submit"] {
            cursor: pointer;
            border: 0;
            height: 58px;
            border-radius: 6px;
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            margin-top: 1.5rem;

            &:hover {
                background: ${props => props.theme['green-700']};
                transition: background-color 0.2s;
            }
        }
    }
`;

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
    variant: 'inbound' | 'outbound';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    cursor: pointer;
    background: ${props => props.theme["gray-700"]};
    padding: 1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    border-radius: 6px;
    border: 0;
    color: ${props => props.theme['gray-300']};

    svg {
        color: ${props => props.variant === 'inbound' ? props.theme["green-300"] : props.theme["red-300"]};
    }

    &:hover, &:focus {
        box-shadow: ${props => props.variant === 'inbound' ? props.theme["green-300"] : props.theme["red-300"]} 0px 0px 0px 2px;
        background-color: ${props => props.variant === 'inbound' ? props.theme["green-300"] : props.theme["red-300"]};
        color: ${props => props.theme.white} !important;
        transition: box-shadow 0.2s, background-color 0.2s, color 0.2s ;

        svg {
            color: ${props => props.theme.white};
        }
    }

    &[data-state='checked'] {
        color: ${props => props.theme.white};
        background: ${props => props.variant === 'inbound' ? props.theme["green-500"] : props.theme["red-300"]};

        svg {
            color: ${props => props.theme.white};
        }
    }
`;