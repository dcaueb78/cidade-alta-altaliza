import React from 'react';

import { useCart } from '../../hooks/CartContext';
import { useAuth } from '../../hooks/AuthContext';

import MoneyIcon from '../../utils/getMoneyIcon';
import {
  Container, TotalPrice, ContainerPrices, RentButton,
} from './styles';

const Footer: React.FC = () => {
  const { RentCart } = useCart();
  const { user } = useAuth();

  return (
    <Container className="bg-pattern-altaliza text-light py-4">
      <TotalPrice>
        <div>Total:</div>
        <ContainerPrices>
          <div>
            <MoneyIcon moneyType="dollar" />
            $ 0
          </div>
          <div>
            <MoneyIcon moneyType="diamond" />
            $ 2.500
          </div>
        </ContainerPrices>
      </TotalPrice>
      <RentButton onClick={() => RentCart()}>
        Alugar Agora
      </RentButton>
    </Container>
  );
};

export default Footer;
