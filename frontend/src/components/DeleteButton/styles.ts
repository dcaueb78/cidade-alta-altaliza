import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.button`
    background: #DD3444;
    height: 36px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: ${(props) => props.theme.colors.background};
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    transition: background-color 0.2s;
    margin-top: 10px;

    &:hover {
        background: ${shade(0.2, '#DD3444')}
    }
`;

export default Container;
