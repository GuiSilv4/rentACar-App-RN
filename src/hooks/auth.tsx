import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
  // eslint-disable-next-line camelcase
  avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  toggleShowTabBar(): void;
  showTabBar: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  const [showTabBar, setShowTabBar] = useState(false);

  const toggleShowTabBar = useCallback((): void => {
    setShowTabBar(!showTabBar);
  }, [showTabBar]);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@RentACarApp:token',
        '@RentACarApp:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    // const response = await api.post('sessions', {
    //   email,
    //   password,
    // });

    // const { token, user } = response.data;

    const token = 'qeqwejqwjeqw';
    const user = {
      id: '1',
      email: 'teste@gmail.com',
      name: 'Guilherme Alano',
      avatar_url: 'string',
    };

    await AsyncStorage.multiSet([
      ['@RentACarApp:token', token],
      ['@RentACarApp:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token[1]}`;
    setShowTabBar(false);
    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@RentACarApp:user', '@RentACarApp:token']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signIn,
        signOut,
        toggleShowTabBar,
        showTabBar,
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
