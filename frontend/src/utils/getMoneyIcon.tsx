import React from 'react';

import { GiCutDiamond } from 'react-icons/gi';
import { BiWallet } from 'react-icons/bi';

interface IProps {
  moneyType: string
}

const MoneyIcon: React.FC<IProps> = (props) => {
  const { moneyType } = props;
  if (moneyType === 'diamond') {
    return <GiCutDiamond size={42} color="#06D6F5" />;
  }
  return <BiWallet size={42} color="#3CE369" />;
};

export default MoneyIcon;
