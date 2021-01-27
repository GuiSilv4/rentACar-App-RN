import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboard01 from '../pages/Onboard01';
import Onboard02 from '../pages/Onboard02';
import WelcomeScreen from '../pages/WelcomeScreen';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterConfirmation from '../pages/RegisterConfirmation';

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
    <Auth.Screen name="RegisterConfirmation" component={RegisterConfirmation} />
    <Auth.Screen name="Register" component={Register} />
  </Auth.Navigator>
);

export default AuthRoutes;
