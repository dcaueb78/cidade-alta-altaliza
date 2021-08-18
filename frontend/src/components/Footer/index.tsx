import React from 'react';

import Image from 'react-bootstrap/Image';
import LogoAltaliza from '../../assets/logo_altaliza.png';

const Footer: React.FC = () => (
  <>
    <div className="bg-pattern-altaliza text-light py-4">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 mb-3 col-md-auto mr-md-auto mb-md-0">
            <p className="text-center text-md-left small">
              Copyright © 2021 Cidade Alta RP! Servidor
              de Grand Theft Auto RP - Todos os direitos reservados
            </p>
          </div>
          <div className="col-auto">
            <Image fluid src={LogoAltaliza} alt="Grupo BMG" style={{ maxHeight: '100px' }} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
