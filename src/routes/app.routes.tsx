import React from 'react';
import { LogBox } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import DashboardRoutes from './dashboard.routes';
import EditProfile from '../pages/EditProfile';
import ConfirmationScreen from '../pages/ConfirmationScreen';
import LeaveConfirmation from '../pages/LeaveConfirmation';
import RentDetails from '../pages/RentDetails';

const AppStack = createStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

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
      <AppStack.Screen name="RentDetails" component={RentDetails} />
      <AppStack.Screen name="EditProfile" component={EditProfile} />
      <AppStack.Screen
        name="ConfirmationScreen"
        component={ConfirmationScreen}
      />
      <AppStack.Screen name="LeaveConfirmation" component={LeaveConfirmation} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
