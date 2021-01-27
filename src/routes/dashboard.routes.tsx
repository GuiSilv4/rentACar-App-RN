import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../hooks/auth';

import DatePick from '../pages/DatePick';
import Listing from '../pages/Listing';
import Appointments from '../pages/Appointments';
import Profile from '../pages/Profile';

const { width, height } = Dimensions.get('window');

const TabStack = createBottomTabNavigator();
const activeTintColor = '#DC1637';
const inactiveTintColor = '#AEAEB3';

interface screenOptionsProps {
  iconName: string;
  showTabBar: boolean;
}

interface screenOptionsReturnType {
  tabBarLabel: string;
  tabBarVisible: boolean;
  tabBarIcon: ({ color }: any) => JSX.Element;
}

const screenOptions = ({
  iconName,
  showTabBar,
}: screenOptionsProps): screenOptionsReturnType => {
  return {
    tabBarLabel: '',
    tabBarVisible: showTabBar,
    tabBarIcon: ({ color }: any) => (
      <Icon name={iconName} size={(height / width) * 12} color={color} />
    ),
  };
};

const DashboardRoutes: React.FC = () => {
  const { showTabBar } = useAuth();

  return (
    <TabStack.Navigator
      tabBarOptions={{
        activeTintColor,
        inactiveTintColor,
        style: {
          borderTopColor: '#EBEBF0',
          borderTopWidth: showTabBar ? 2 : 0,
          paddingTop: 10,
          height: Platform.OS === 'ios' ? 85 : 50,
          borderWidth: 0,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0,
          height: '100%',
        },
      }}
    >
      <TabStack.Screen
        name="Home"
        component={DatePick}
        options={screenOptions({
          iconName: 'home-outline',
          showTabBar,
        })}
      />
      <TabStack.Screen
        name="CarList"
        component={Listing}
        options={screenOptions({
          iconName: 'car-outline',
          showTabBar: true,
        })}
      />
      <TabStack.Screen
        name="Appointments"
        component={Appointments}
        options={screenOptions({
          iconName: 'calendar-outline',
          showTabBar: true,
        })}
      />
      <TabStack.Screen
        name="Profile"
        component={Profile}
        options={screenOptions({
          iconName: 'person-outline',
          showTabBar: true,
        })}
      />
    </TabStack.Navigator>
  );
};

export default DashboardRoutes;
