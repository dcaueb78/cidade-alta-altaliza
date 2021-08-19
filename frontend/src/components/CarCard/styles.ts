import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const CarCard = styled.li`
  &:hover {
    transform: translateY(-5px);
    transition: all 0.2s;
  }
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 15px 15px 15px 15px;
  border-radius: 4px;
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
  max-width: 300px;

  img {
    border-radius: 4px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: #BBBBBB;
      font-size: 20px;
      margin-top: 5px;
    }
    span {
      color: #999;
      font-size: 16px;
      font-weight: bold;
    }
  }

  div.car-infos {
    display: flex;
    flex-direction: row;

    >div.car-info {
      display: flex;
      flex-direction: row;
      justify-content: center;

      >p:first-child {
        color: ${(props) => props.theme.colors.primary};
      }

      >p {
        color: #999;
        margin-right: 5px;
      }
    }
  }
`;

export default CarCard;
