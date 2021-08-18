import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: ${(props) => props.theme.colors.background};

    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        margin: 80px 0;
        width: 440px;
        text-align: center;

        h1 {
            color: #fff;
            margin-bottom: 24px;
        }
    }
`;
