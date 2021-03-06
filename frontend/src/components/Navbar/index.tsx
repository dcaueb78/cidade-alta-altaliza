import React, { useState, useEffect, useRef } from 'react';

import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { FiLogOut, FiSearch } from 'react-icons/fi';
import { HiShoppingCart, HiOutlineShoppingCart } from 'react-icons/hi';
import { AiFillCar } from 'react-icons/ai';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../Input';

import MoneyIcon from '../../utils/getMoneyIcon';
import {
  ROUTE_DASHBOARD,
  ROUTE_CART,
  ROUTE_MYCARS,
} from '../../constants/Routes';

import { useAuth, userInfos } from '../../hooks/AuthContext';
import { UserNav, MoneyDiv, SearchDiv } from './styled';

import LogoAltaliza from '../../assets/logo_altaliza.png';
import formattedCurrency from '../../utils/getFormattedCurrency';

const Navbar:React.FC = ({ children }) => {
  const { user, signOut, filter } = useAuth();
  const { pathname } = window.location;
  const [userData, setUserData] = useState<userInfos>({} as userInfos);
  const [userDollar, setUserDollar] = useState('0');
  const [userDiamonds, setUserDiamonds] = useState('0');
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    const newValue = userData?.dollar ? formattedCurrency(userData?.dollar) : formattedCurrency(0);
    setUserDollar(newValue);
  }, [userData?.dollar]);

  useEffect(() => {
    const newValue = userData?.diamonds
      ? formattedCurrency(userData?.diamonds) : formattedCurrency(0);
    setUserDiamonds(newValue);
  }, [userData?.diamonds]);

  const handleSubmit = () => {
    console.log('submit');
  };

  const handleSignOut = async () => {
    signOut();
  };

  useEffect(() => {
    const newUserData = user;

    if (newUserData) {
      setUserData(newUserData);
    }
  }, [user]);

  return (
    <>
      <section className="bg-pattern-altaliza py-2">
        <Container fluid>
          <div className="d-flex align-items-center">
            <Image fluid src={LogoAltaliza} alt="Logotipo da Altaliza!" style={{ maxHeight: '90px' }} />
            <SearchDiv>
              <Form className="formInput" ref={formRef} onSubmit={handleSubmit}>
                <Input name="filter" icon={FiSearch} placeholder="FILTRO" onChange={(e) => filter(e.target.value)} />
              </Form>
            </SearchDiv>
            <MoneyDiv className="ml-auto">
              <div>
                <MoneyIcon moneyType="dollar" />
                <p>
                  {userDollar}
                </p>
              </div>

              <div>
                <MoneyIcon moneyType="diamond" />
                <p>
                  {userDiamonds}
                </p>
              </div>
            </MoneyDiv>
            <a
              href={ROUTE_DASHBOARD}
              className={
                pathname.search(ROUTE_DASHBOARD) >= 0
                  ? 'btn btn-outline-light btn-sm ml-auto active'
                  : 'btn btn-outline-light btn-sm ml-auto'
              }
            >
              CAT??LOGO
            </a>
            <a
              href={ROUTE_CART}
              className={
                pathname.search(ROUTE_CART) >= 0
                  ? 'btn btn-outline-light btn-sm ml-3 active'
                  : 'btn btn-outline-light btn-sm ml-3'
              }
            >
              {pathname.search(ROUTE_CART) >= 0
                ? (<HiShoppingCart size={34} />)
                : (<HiOutlineShoppingCart size={34} />)}
            </a>
            <a
              href={ROUTE_MYCARS}
              className={
                pathname.search(ROUTE_MYCARS) >= 0
                  ? 'btn btn-outline-light btn-sm ml-3 active'
                  : 'btn btn-outline-light btn-sm ml-3'
              }
            >
              <AiFillCar size={34} />
            </a>
            <UserNav>
              {userData && (
                <p>
                  Ol??,
                  {' '}
                  {userData?.email}
                </p>
              )}
              <Button variant="outline-light" size="sm" className="ml-3" onClick={handleSignOut}>
                <FiLogOut onClick={handleSignOut} />
              </Button>
            </UserNav>
          </div>
        </Container>
      </section>

      {children}
    </>
  );
};

export default Navbar;
