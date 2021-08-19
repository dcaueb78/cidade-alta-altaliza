import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    color: #B3B2B0;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  font-size: 28px;
  font-weight: bold;
  width: 35%;
`;

export const ContainerPrices = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  width: 400px;
  flex: 1;
  color: #A4A4A4;

  >div {
    margin-right: 50px;
  }

  svg {
    margin-right: 10px;
  }
`;

export const RentButton = styled.button`
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-weight: bold;
  width: 17%;
  border-radius: 5px;

  font-size: 28px;
  color: ${(props) => props.theme.colors.secundary};
  background-color: ${(props) => props.theme.colors.primary};

  padding-right: 20px;
  padding-left: 20px;
  margin-right: 25px;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.2s;
  }
`;
