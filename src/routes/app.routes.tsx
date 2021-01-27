import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import DashboardRoutes from './dashboard.routes';
import EditProfile from '../pages/EditProfile';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal-inverted',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardOverlayEnabled: true,
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <AppStack.Screen name="Dashboard" component={DashboardRoutes} />
      <AppStack.Screen name="EditProfile" component={EditProfile} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
