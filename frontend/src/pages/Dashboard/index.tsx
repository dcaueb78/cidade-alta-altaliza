import React, { useEffect, useState } from 'react';
import { GiGymBag } from 'react-icons/gi';
import { RiSafe2Fill } from 'react-icons/ri';

import Swal from 'sweetalert2';
import { useAuth } from '../../hooks/AuthContext';
import CarCard from '../../components/CarCard';
import Container from '../../components/ResponsiveContainer';
import ActionButton from '../../components/ActionButton';

import { useCart } from '../../hooks/CartContext';

const carListMock = [{
  name: 'Carro de teste',
  category: 'Veículo SUV',
  imageURL: 'https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg',
  bagQuantity: 100,
  slotsQuantity: 5,
  oneDayPrice: '2.500',
  sevenDaysPrice: '16.000',
  fifteenDaysPrice: '30.000',
  moneyType: 'diamond',
  id: 0,
  stock: 2,
},
{
  name: 'Carro de teste',
  category: 'Veículo SUV',
  imageURL: 'https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: '2.500',
  sevenDaysPrice: '16.000',
  fifteenDaysPrice: '30.000',
  moneyType: 'diamond',
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
  oneDayPrice: string,
  sevenDaysPrice: string,
  fifteenDaysPrice: string,
  id: number,
  moneyType: string,
  stock: number,
}

const Dashboard: React.FC = () => {
  const { updateCart } = useCart();
  const { user } = useAuth();
  const [filteredCarList, setFilteredCarList] = useState<ICarInfos[]>();

  useEffect(() => {
    if (user?.search) {
      const newCarList = carListMock.filter((actualCar) => actualCar
        ?.name.toUpperCase().match(user?.search.toUpperCase()));
      setFilteredCarList(newCarList);
    } else {
      setFilteredCarList(carListMock);
    }
  }, [user?.search]);

  const handleRentCar = async (carInfos: ICarInfos) => {
    const { value: SelectedRentValue } = await Swal.fire({
      title: 'Selecione o tempo de aluguel',
      input: 'select',
      inputOptions: {
        oneDayPrice: `1 dia - ${carInfos?.oneDayPrice} ${carInfos?.moneyType === 'diamond' ? 'diamantes' : 'dollar'}`,
        sevenDaysPrice: `7 dias - ${carInfos?.sevenDaysPrice} diamantes`,
        fifteenDaysPrice: `15 dias - ${carInfos?.fifteenDaysPrice} diamantes `,
      },
      inputPlaceholder: 'Selecione...',
      showCancelButton: true,
      inputValidator: () => new Promise((resolve) => {
        resolve(null);
      }),
    });

    if (SelectedRentValue) {
      const formattedCarInfos = { ...carInfos, selectedRent: SelectedRentValue };
      updateCart(formattedCarInfos);
    }
  };

  return (

    <>
      <Container>
        <h3>Faça a sua reserva</h3>
        <hr />
        <h3>Veículos</h3>
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

              <div>
                <span>
                  {' '}
                  Estoque:
                  {' '}
                  {actualCar?.stock}
                </span>
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
              {actualCar?.stock > 0 ? (
                <ActionButton data-testid="submitButton" label="Alugue Agora" type="button" onClick={() => handleRentCar(actualCar)} />)
                : (<ActionButton data-testid="submitButton" label="Sem estoque" type="button" />)}

            </CarCard>
          ))
            : (
              <p>Nenhum carro com o filtro selecionado</p>
            )}

        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
