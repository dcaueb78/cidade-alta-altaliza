import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import { CART_UPDATE_ERROR, CART_UPDATE_SUCCESS } from '../constants/Toast';

import { ICarInfos } from '../pages/Dashboard';
import { useToast } from './ToastContext';

export interface ICartState {
   cart: Array<ISelectedCarInfo>,
}

interface ISelectedCarInfo extends ICarInfos {
  selectedRent: string,
}

interface ICartContextData {
    cart: ICartState;
    updateCart(cartInfos: ISelectedCarInfo): Promise<void>;
    removeCart(cartId: string): void;
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ICartState>(() => ({} as ICartState));
  const { addToast } = useToast();

  const updateCart = useCallback(async (cartInfos) => {
    if (data.cart) {
      const validateCartAlreadySelected = data.cart.length && data.cart.filter(
        (selectedCar) => (selectedCar.id === cartInfos.id),
      );

      const selectedCarDontExistInTheCart = validateCartAlreadySelected
      && !validateCartAlreadySelected.length;

      if (selectedCarDontExistInTheCart) {
        const newCart = data.cart;
        newCart.push(cartInfos);

        setData({ cart: newCart });
        addToast(CART_UPDATE_SUCCESS);
      } else {
        addToast(CART_UPDATE_ERROR);
      }
    } else {
      setData({ cart: [cartInfos] });
      addToast(CART_UPDATE_SUCCESS);
    }
  }, [addToast, data.cart]);

  const removeCart = useCallback(({ cartId }) => {
    const newCart = data.cart.filter((selectedCar) => selectedCar !== cartId);

    setData({ cart: newCart });
  }, [data.cart]);

  return (
    <CartContext.Provider value={{
      cart: data,
      updateCart,
      removeCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): ICartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { CartProvider, useCart };
