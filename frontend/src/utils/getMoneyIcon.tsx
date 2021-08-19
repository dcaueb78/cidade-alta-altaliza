import React from 'react';

import { GrDiamond } from 'react-icons/gr';
import { AiOutlineDollarCircle } from 'react-icons/ai';

interface IProps {
  moneyType: string
}

const MoneyIcon: React.FC<IProps> = (props) => {
  const { moneyType } = props;
  if (moneyType === 'diamond') {
    return <GrDiamond />;
  }
  return <AiOutlineDollarCircle />;
};

export default MoneyIcon;
