import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #ffffff;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid #ffffff;
    color: #B3B2B0;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${(props) => props.isErrored && css`
        border-color: #c53020;
    `}

    ${(props) => props.isFocused && css`
        color: ${props.theme.colors.primary};
        border-color: ${props.theme.colors.primary};
    `}


    ${(props) => props.isFilled && css`
        color: ${props.theme.colors.primary};
    `}


    input {
        flex: 1;
        border: 0;
        background: transparent;

        &::placeholder {
            color: #B3B2B0;
        }

    }

    /* Cor de fundo do autocomplete */
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px #ffffff inset;
    }
    svg {
        margin-right: 16px;

        ${(props) => props.isErrored && css`
            color: #c53020;
        `}
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53020;
        color: #ffffff;

        &::before {
            border-color: #c53020 transparent;
        }
    }
`;
