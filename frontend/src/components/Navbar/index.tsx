import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { FiLogOut } from 'react-icons/fi';
import {
  ROUTE_DASHBOARD,
  ROUTE_CART,
  ROUTE_MYCARS,
} from '../../constants/Routes';

import { useAuth } from '../../hooks/AuthContext';
import AUTH_USER from '../../constants/Auth';
import { UserNav } from './styled';

import LogoAltaliza from '../../assets/logo_altaliza.png';

interface IUserData {
    email?: string;
}

const Navbar:React.FC = ({ children }) => {
  const { signOut } = useAuth();
  const { pathname } = window.location;
  const [userData, setUserData] = useState<IUserData>({} as IUserData);

  const handleSignOut = async () => {
    signOut();
  };

  useEffect(() => {
    const newUserData = localStorage.getItem(AUTH_USER);

    if (newUserData) {
      setUserData({ email: JSON.parse(newUserData) });
    }
  }, [pathname]);

  return (
    <>
      <section className="bg-pattern-altaliza py-2">
        <Container fluid>
          <div className="d-flex align-items-center">
            <Image fluid src={LogoAltaliza} alt="Logotipo da Altaliza!" style={{ maxHeight: '90px' }} />
            <a
              href={ROUTE_DASHBOARD}
              className={
                pathname.search(ROUTE_DASHBOARD) >= 0
                  ? 'btn btn-outline-light btn-sm ml-auto active'
                  : 'btn btn-outline-light btn-sm ml-auto'
              }
            >
              Dashboard
            </a>
            <a
              href={ROUTE_CART}
              className={
                pathname.search(ROUTE_CART) >= 0
                  ? 'btn btn-outline-light btn-sm ml-3 active'
                  : 'btn btn-outline-light btn-sm ml-3'
              }
            >
              Carrinho
            </a>
            <a
              href={ROUTE_MYCARS}
              className={
                pathname.search(ROUTE_MYCARS) >= 0
                  ? 'btn btn-outline-light btn-sm ml-3 active'
                  : 'btn btn-outline-light btn-sm ml-3'
              }
            >
              Meus Carros
            </a>
            <UserNav>
              {userData && (
                <p>
                  Olá,
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
