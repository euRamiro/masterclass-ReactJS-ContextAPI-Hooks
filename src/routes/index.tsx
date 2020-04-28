import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {logadoContext} from '../contexts/logado';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const {logado, loading} = logadoContext();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return logado ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
