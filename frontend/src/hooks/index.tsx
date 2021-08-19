import React from 'react';

import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
