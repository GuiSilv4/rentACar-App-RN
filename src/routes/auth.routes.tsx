import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

import Onboard01 from '../pages/Onboard01';
import Onboard02 from '../pages/Onboard02';
import WelcomeScreen from '../pages/WelcomeScreen';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ConfirmationScreen from '../pages/ConfirmationScreen';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="Onboard01" component={Onboard01} />
    <Auth.Screen name="Onboard02" component={Onboard02} />
    <Auth.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
    <Auth.Screen name="Register" component={Register} />
  </Auth.Navigator>
);

export default AuthRoutes;
