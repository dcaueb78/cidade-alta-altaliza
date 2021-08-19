import React from 'react';

import CarCardStyled from './styles';

const CarCard: React.FC = ({ children }) => (
  <CarCardStyled>
    {children}
  </CarCardStyled>
);

export default CarCard;
