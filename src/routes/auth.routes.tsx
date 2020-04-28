import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Logar from '../pages/Logar';

const LogarStack = createStackNavigator();

const AuthRoutes: Reac.FC = () => (
  <LogarStack.Navigator>
    <LogarStack.Screen name="Logar" component={Logar} />
  </LogarStack.Navigator>
);

export default AuthRoutes;
