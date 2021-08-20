import React, { useEffect, useState } from 'react';
import { GiGymBag } from 'react-icons/gi';
import { RiSafe2Fill } from 'react-icons/ri';

import Swal from 'sweetalert2';
import selectColor from '../../utils/getFormattedButtonStatus';
import { useAuth } from '../../hooks/AuthContext';
import CarCard from '../../components/CarCard';
import Container from '../../components/ResponsiveContainer';
import ActionButton from '../../components/ActionButton';

import { useCart } from '../../hooks/CartContext';

const carListMock = [{
  name: 'Jeep Compass',
  category: 'Veículo SUV',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 5,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'dollar',
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
  id: 1,
  stock: 1,
},
{
  name: 'Ferrari 458 Speciale',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'diamond',
  id: 3,
  stock: 1,
},
{
  name: 'Lamborghini Huracan',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'dollar',
  id: 3,
  stock: 1,
},
{
  name: 'Lamborghini Huracan',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'diamond',
  id: 4,
  stock: 1,
},
{
  name: 'Ferrari 458 Speciale',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'diamond',
  id: 5,
  stock: 1,
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
  id: 6,
  stock: 1,
}, {
  name: 'Jeep Compass',
  category: 'Veículo SUV',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 5,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'dollar',
  id: 7,
  stock: 2,
},
{
  name: 'Jeep Compass',
  category: 'Veículo SUV',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 5,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'dollar',
  id: 8,
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
  id: 9,
  stock: 1,
},
{
  name: 'Ferrari 458 Speciale',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'diamond',
  id: 10,
  stock: 1,
},
{
  name: 'Lamborghini Huracan',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'dollar',
  id: 11,
  stock: 1,
},
{
  name: 'Lamborghini Huracan',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'diamond',
  id: 12,
  stock: 1,
},
{
  name: 'Ferrari 458 Speciale',
  category: 'Veículo Esportivo',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 10,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'diamond',
  id: 13,
  stock: 1,
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
  id: 14,
  stock: 1,
}, {
  name: 'Jeep Compass',
  category: 'Veículo SUV',
  imageURL: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Porsche-Panamera-2021-6-e1598414203576.jpg?quality=70&strip=info&w=1024',
  bagQuantity: 100,
  slotsQuantity: 5,
  oneDayPrice: 2500,
  sevenDaysPrice: 16000,
  fifteenDaysPrice: 30000,
  moneyType: 'dollar',
  id: 15,
  stock: 2,
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
        oneDayPrice: `1 dia - ${carInfos?.oneDayPrice} ${carInfos?.moneyType === 'diamond' ? 'diamantes' : 'reais'}`,
        sevenDaysPrice: `7 dias - ${carInfos?.sevenDaysPrice} ${carInfos?.moneyType === 'diamond' ? 'diamantes' : 'reais'}`,
        fifteenDaysPrice: `15 dias - ${carInfos?.fifteenDaysPrice} ${carInfos?.moneyType === 'diamond' ? 'diamantes' : 'reais'} `,
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
                <ActionButton
                  color={selectColor(actualCar?.stock, actualCar?.moneyType)}
                  data-testid="submitButton"
                  label="Alugue Agora"
                  type="button"
                  onClick={() => handleRentCar(actualCar)}
                />
              )
                : (
                  <ActionButton
                    color={selectColor(actualCar?.stock, actualCar?.moneyType)}
                    data-testid="submitButton"
                    label="Sem estoque"
                    type="button"
                  />
                )}

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
