import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Button = styled.button`
  margin: 0 3px;

  &[disabled] {
    cursor: default;
    opacity: 0.2;
  }
`;

export const ButtonPlaceholder = styled.span`
  margin: 0 3px;
  opacity: 0.4;
`;
