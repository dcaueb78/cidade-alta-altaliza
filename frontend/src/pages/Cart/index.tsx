import React, { useEffect, useState } from 'react';
import { GiGymBag } from 'react-icons/gi';
import { RiSafe2Fill } from 'react-icons/ri';
import { AiTwotoneCalendar } from 'react-icons/ai';

import { useAuth } from '../../hooks/AuthContext';
import formatExpirationDate from '../../utils/getFormattedDate';
import DeleteButton from '../../components/DeleteButton';
import Footer from '../../components/Footer';
import { formatCartDays, formatCartPrice } from '../../utils/getFormattedMessages';
import CarCard from '../../components/CarCard';
import Container from '../../components/ResponsiveContainer';
import ActionButton from '../../components/ActionButton';

import { useCart } from '../../hooks/CartContext';

export interface ICarInfos {
  name: string,
  category: string,
  imageURL: string,
  bagQuantity: number,
  slotsQuantity: number,
  oneDayPrice: number,
  sevenDaysPrice: number,
  fifteenDaysPrice: number,
  id: number,
  moneyType: string,
  selectedRent: string,
  stock: number,
}

const Cart: React.FC = () => {
  const { cart, removeCart } = useCart();
  const { user } = useAuth();

  const [filteredCarList, setFilteredCarList] = useState<ICarInfos[]>();

  useEffect(() => {
    if (user?.search) {
      const newCarList = cart.cart.filter((actualCar) => actualCar
        ?.name.toUpperCase().match(user?.search.toUpperCase()));
      setFilteredCarList(newCarList);
    } else {
      setFilteredCarList(cart.cart);
    }
  }, [cart.cart, user?.search]);

  return (
    <>
      <Container>
        <h3>
          Carrinho (
          {cart?.cart ? cart.cart?.length : '0' }
          )
        </h3>
        <ul>

          {filteredCarList && filteredCarList.length > 0 ? filteredCarList.map((actualCar) => (
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
                <div className="car-info">
                  <p><AiTwotoneCalendar /></p>
                  <p>
                    {formatExpirationDate(actualCar?.selectedRent)}
                  </p>
                </div>
              </div>
              <ActionButton
                label={`${formatCartDays(actualCar?.selectedRent)} - ${formatCartPrice(actualCar?.selectedRent, actualCar?.oneDayPrice, actualCar?.sevenDaysPrice, actualCar?.fifteenDaysPrice)}`}
                type="button"
              />
              <DeleteButton onClick={() => removeCart(actualCar?.id)} label="Remover do carrinho" type="button" />

            </CarCard>
          ))
            : (
              <p>Carrinho vazio</p>
            )}

        </ul>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
