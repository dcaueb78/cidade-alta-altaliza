import React, { useEffect, useState } from 'react';
import { GiGymBag } from 'react-icons/gi';
import { RiSafe2Fill } from 'react-icons/ri';

import { AiTwotoneCalendar } from 'react-icons/ai';
import selectColor from '../../utils/getFormattedButtonStatus';
import { formatCartDays, formatCartPrice } from '../../utils/getFormattedMessages';
import DeleteButton from '../../components/DeleteButton';
import formatExpirationDate from '../../utils/getFormattedDate';
import { useAuth } from '../../hooks/AuthContext';
import CarCard from '../../components/CarCard';
import Container from '../../components/ResponsiveContainer';
import ActionButton from '../../components/ActionButton';

const myCarsListMock = [{
  name: 'Jeep Compass',
  category: 'Veículo SUV',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 5,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'dollar',
  selectedRent: 'oneDayPrice',
  id: 0,
  stock: 2,
},
{
  name: 'Porsche Panamera',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'diamond',
  selectedRent: 'fifteenDaysPrice',
  id: 1,
  stock: 1,
},
];

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

const MyCars: React.FC = () => {
  const { user } = useAuth();
  const [filteredCarList, setFilteredCarList] = useState<ICarInfos[]>();

  useEffect(() => {
    if (user?.search) {
      const newCarList = myCarsListMock.filter((actualCar) => actualCar
        ?.name.toUpperCase().match(user?.search.toUpperCase()));
      setFilteredCarList(newCarList);
    } else {
      setFilteredCarList(myCarsListMock);
    }
  }, [user?.search]);

  return (

    <>
      <Container>
        <h3>Meus Veículos</h3>
        <ul>

          {filteredCarList && filteredCarList?.length ? filteredCarList.map((actualCar) => (
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
                color={selectColor(actualCar?.stock, actualCar?.moneyType)}
                label={`${formatCartDays(actualCar?.selectedRent)} - ${formatCartPrice(actualCar?.selectedRent, actualCar?.oneDayPrice, actualCar?.sevenDaysPrice, actualCar?.fifteenDaysPrice)}`}
                type="button"
              />
              <DeleteButton onClick={() => console.log('Devolvendo')} label="Devolver carro" type="button" />

            </CarCard>
          ))
            : (
              <p>Carrinho vazio</p>
            )}

        </ul>
      </Container>
    </>
  );
};

export default MyCars;
