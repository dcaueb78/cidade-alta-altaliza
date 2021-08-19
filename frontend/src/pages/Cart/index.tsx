import React from 'react';
import { GiGymBag } from 'react-icons/gi';
import { RiSafe2Fill } from 'react-icons/ri';

import { formatCartDays, formatCartPrice } from '../../utils/getFormattedMessages';
import CarCard from '../../components/CarCard';
import Container from '../../components/ResponsiveContainer';
import ActionButton from '../../components/ActionButton';

import { useCart } from '../../hooks/CartContext';

const Cart: React.FC = () => {
  const { cart } = useCart();

  return (

    <>
      <Container>
        <h3>
          Carrinho (
          {cart?.cart ? cart.cart?.length : '0' }
          )
        </h3>
        <ul>

          {cart?.cart && cart?.cart?.length ? cart?.cart.map((actualCar) => (
            <CarCard
              key={actualCar?.id}
            >
              <img src={actualCar?.imageURL} alt={actualCar?.name} />
              <div>
                <strong>{actualCar?.name}</strong>
                <span>{actualCar?.category}</span>
              </div>
              <div className="car-infos">
                <div className="car-info">
                  <p><GiGymBag /></p>
                  <p>
                    {actualCar?.bagQuantity}
                    {' '}
                    KG
                  </p>
                </div>
                <div className="car-info">
                  <p><RiSafe2Fill /></p>
                  <p>
                    {actualCar?.slotsQuantity}
                    {' '}
                    slots
                  </p>
                </div>
              </div>
              <ActionButton
                label={`${formatCartDays(actualCar?.selectedRent)} - ${formatCartPrice(actualCar?.selectedRent, actualCar?.oneDayPrice, actualCar?.sevenDaysPrice, actualCar?.fifteenDaysPrice)}`}
                type="button"
              />

            </CarCard>
          ))
            : (
              <p>oi</p>
            )}

        </ul>

        <div className="load-more">
          <button type="button" onClick={() => console.log('handleLoadMore')}>
            Carregar mais...
          </button>
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
