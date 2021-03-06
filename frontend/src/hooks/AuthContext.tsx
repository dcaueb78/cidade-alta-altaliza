import React, {
  createContext, useCallback, useContext, useState,
} from 'react';

import { useHistory } from 'react-router-dom';

import { ROUTE_SIGNUP } from '../constants/Routes';

import { AUTH_USER, CART } from '../constants/Auth';

interface AuthState {
    user: userInfos;
}

interface SignInCredentials {
    email: string;
    password: string;
}

export interface userInfos {
    email: string;
    diamonds: number,
    dollar: number,
    search: string,
}

interface AuthContextData {
    user: userInfos;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    filter(value: string): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const baseMoney = { diamonds: 5000, dollar: 20000 };

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem(AUTH_USER);

    if (user) {
      return JSON.parse(user);
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    localStorage.setItem(AUTH_USER, JSON.stringify({ user: { email, ...baseMoney, search: '' } }));
    setData({ user: { email, ...baseMoney, search: '' } });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_USER);
    localStorage.removeItem(CART);

    setData({} as AuthState);

    history.push(ROUTE_SIGNUP);
  }, [history]);

  const filter = useCallback((value) => {
    setData({ user: { ...data.user, search: value } });
  }, [data.user]);

  return (
    <AuthContext.Provider value={{
      user: data.user, signIn, signOut, filter,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
