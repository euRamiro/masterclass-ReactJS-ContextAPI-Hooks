import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogadoProvider} from './contexts/logado';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <LogadoProvider>
        <Routes />
      </LogadoProvider>
    </NavigationContainer>
  );
};

export default App;
