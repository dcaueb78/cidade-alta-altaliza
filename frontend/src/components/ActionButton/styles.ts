import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.button`
    background: ${(props) => (props.color ? props.color : props.theme.colors.tertiary)};
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: ${(props) => props.theme.colors.background};
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    transition: background-color 0.2s;

    &:hover {
        background: ${(props) => shade(0.2, props.color ? props.color : props.theme.colors.tertiary)}
    }
`;

export default Container;
