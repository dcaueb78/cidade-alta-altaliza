import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import { CART_RENT_SUCCESS, CART_UPDATE_ERROR, CART_UPDATE_SUCCESS } from '../constants/Toast';
import { CART } from '../constants/Auth';

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
    removeCart(cartId: number): void;
    RentCart(): void
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ICartState>(() => {
    const cartJson = localStorage.getItem(CART);

    if (cartJson) {
      return { cart: JSON.parse(cartJson) };
    }

    return ({} as ICartState);
  });
  const { addToast } = useToast();

  const updateCart = useCallback(async (cartInfos) => {
    if (data.cart && data.cart.length > 0) {
      const validateCartAlreadySelected = data.cart.length && data.cart.filter(
        (selectedCar) => (selectedCar.id === cartInfos.id),
      );

      const selectedCarDontExistInTheCart = !!validateCartAlreadySelected;

      if (selectedCarDontExistInTheCart) {
        const newCart = data.cart;
        newCart.push(cartInfos);

        setData({ cart: newCart });
        localStorage.setItem(CART, JSON.stringify(newCart));
        addToast(CART_UPDATE_SUCCESS);
      } else {
        addToast(CART_UPDATE_ERROR);
      }
    } else {
      setData({ cart: [cartInfos] });
      localStorage.setItem(CART, JSON.stringify([cartInfos]));
      addToast(CART_UPDATE_SUCCESS);
    }
  }, [addToast, data.cart]);

  const removeCart = useCallback((cartId) => {
    const newCarts = data.cart.filter((selectedCar) => selectedCar?.id !== cartId);
    localStorage.setItem(CART, JSON.stringify(newCarts));
    setData({ cart: newCarts });
  }, [data.cart]);

  const RentCart = useCallback(() => {
    setData({ cart: [] });
    localStorage.removeItem(CART);
    addToast(CART_RENT_SUCCESS);
  }, [addToast]);

  return (
    <CartContext.Provider value={{
      cart: data,
      updateCart,
      removeCart,
      RentCart,
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
