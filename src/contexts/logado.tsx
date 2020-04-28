import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as fazerLogin from '../services/logar';
import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface LogadoContextData {
  logado: boolean;
  user: User | null;
  loading: boolean;
  logar(): Promise<void>;
  sair(): void;
}

const Context = createContext<LogadoContextData>({} as LogadoContextData);

export const LogadoProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //useEffect não permite async/await por isso criar uma function e chamar logo em seguida
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAutent:user');
      const storagedToken = await AsyncStorage.getItem('@RNAutent:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      } else if (!storagedUser) {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function logar() {
    const response = await fazerLogin.login();

    setUser(response.user);
    //enviando o token para a api
    api.defaults.headers.Authorization = `Bearer ${response.token}`;
    await AsyncStorage.setItem('@RNAutent:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAutent:token', response.token);
  }
  function sair() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <Context.Provider value={{logado: !!user, user, loading, logar, sair}}>
      {children}
    </Context.Provider>
  );
};

//export default LogadoContext;
//criando um hook
export function logadoContext() {
  const logado = useContext(Context);
  return logado;
}
