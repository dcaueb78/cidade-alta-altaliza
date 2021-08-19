import styled from 'styled-components';

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`;

export const UserNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;

    p {
        margin-bottom: 0;
        color: #fff;
        font-size: 14px;
    }

`;

export const MoneyDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  height: 60px;
  border-radius: 15px;
  background-color: #313131;
  color: #fff;

  div {
    display: flex;
    align-items: center;
    font-size: 24px;
    p {
      margin-left: 10px;
    }
  }
`;
