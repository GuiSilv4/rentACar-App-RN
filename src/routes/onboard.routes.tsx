import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboard01 from '../pages/Onboard01';
import Onboard02 from '../pages/Onboard02';
import WelcomeScreen from '../pages/WelcomeScreen';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterConfirmation from '../pages/RegisterConfirmation';
import DashboardRoutes from './dashboard.routes';

const Onboard = createStackNavigator();

const OnboardRoutes: React.FC = () => (
  <Onboard.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Onboard.Screen name="Dashboard" component={DashboardRoutes} />
    <Onboard.Screen name="Onboard01" component={Onboard01} />
    <Onboard.Screen name="Login" component={Login} />
    <Onboard.Screen
      name="RegisterConfirmation"
      component={RegisterConfirmation}
    />
    <Onboard.Screen name="Register" component={Register} />

    <Onboard.Screen name="Onboard02" component={Onboard02} />
    <Onboard.Screen name="WelcomeScreen" component={WelcomeScreen} />
  </Onboard.Navigator>
);

export default OnboardRoutes;
