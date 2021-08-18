import React, {
  createContext, useCallback, useContext, useState,
} from 'react';

import { useHistory } from 'react-router-dom';

import { ROUTE_SIGNUP } from 'constants/Routes';

import AUTH_USER from '../constants/Auth';

interface AuthState {
    user: userInfos;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface userInfos {
    id: string;
    name: string;
    email: string;
}

interface AuthContextData {
    user: userInfos;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem(AUTH_USER);

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    localStorage.setItem(AUTH_USER, JSON.stringify(email));
    setData({ user: email });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_USER);

    setData({} as AuthState);

    history.push(ROUTE_SIGNUP);
  }, [history]);

  return (
    <AuthContext.Provider value={{
      user: data.user, signIn, signOut,
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
