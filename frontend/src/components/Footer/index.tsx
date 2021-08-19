import React from 'react';

import formattedCurrency from '../../utils/getFormattedCurrency';
import { useCart } from '../../hooks/CartContext';

import MoneyIcon from '../../utils/getMoneyIcon';
import {
  Container, TotalPrice, ContainerPrices, RentButton,
} from './styles';

const Footer: React.FC = () => {
  const { RentCart, cart } = useCart();

  const calculateDiamondsCartPriceTotal = () => {
    const cartInfos = cart.cart;

    if (!cartInfos) {
      return formattedCurrency(0);
    }

    const diamondCartsInfos = cartInfos.filter((cartInfo) => cartInfo.moneyType === 'diamond');
    const totalValueArray = diamondCartsInfos.map((cartInfo) => {
      switch (cartInfo?.selectedRent) {
        case ('oneDayPrice'):
          return cartInfo?.oneDayPrice;
        case ('sevenDaysPrice'):
          return cartInfo?.sevenDaysPrice;
        case ('fifteenDaysPrice'):
          return cartInfo?.fifteenDaysPrice;
        default:
          return cartInfo?.oneDayPrice;
      }
    });

    const sumTotalValue = totalValueArray.length !== 0
      ? totalValueArray.reduce((totalValue, actual) => totalValue + actual) : 0;

    return formattedCurrency(sumTotalValue);
  };

  const calculateDollarCartPriceTotal = () => {
    const cartInfos = cart.cart;

    if (!cartInfos) {
      return formattedCurrency(0);
    }

    const diamondCartsInfos = cartInfos.filter((cartInfo) => cartInfo.moneyType === 'dollar');
    const totalValueArray = diamondCartsInfos.map((cartInfo) => {
      switch (cartInfo?.selectedRent) {
        case ('oneDayPrice'):
          return cartInfo?.oneDayPrice;
        case ('sevenDaysPrice'):
          return cartInfo?.sevenDaysPrice;
        case ('fifteenDaysPrice'):
          return cartInfo?.fifteenDaysPrice;
        default:
          return cartInfo?.oneDayPrice;
      }
    });

    const sumTotalValue = totalValueArray.length !== 0
      ? totalValueArray.reduce((totalValue, actual) => totalValue + actual) : 0;

    return formattedCurrency(sumTotalValue);
  };

  return (
    <Container className="bg-pattern-altaliza text-light py-4">
      <TotalPrice>
        <div>Total:</div>
        <ContainerPrices>
          <div>
            <MoneyIcon moneyType="dollar" />
            {calculateDollarCartPriceTotal()}
          </div>
          <div>
            <MoneyIcon moneyType="diamond" />
            {calculateDiamondsCartPriceTotal()}
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
