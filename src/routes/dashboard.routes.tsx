import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePick from '../pages/DatePick';
import { useAuth } from '../hooks/auth';

const { width, height } = Dimensions.get('window');

const TabStack = createBottomTabNavigator();
const activeBackgroundColor = '#ffffff';
const inactiveBackgroundCOlor = '#0f3f3c';

const screenOptions = (iconName, showTabBar) => {
  return {
    tabBarLabel: '',
    tabBarVisible: showTabBar,
    tabBarIcon: ({ color, focused }) => (
      <Icon name={iconName} size={(height / width) * 12} color={color} />
    ),
  };
};

const DashboardRoutes: React.FC = () => {
  const { showTabBar } = useAuth();

  return (
    <TabStack.Navigator
      tabBarOptions={{
        activeTintColor: '#DC1637',
        inactiveTintColor: '#AEAEB3',
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
        options={screenOptions('home-outline', showTabBar)}
      />
      <TabStack.Screen
        name="CarList"
        component={DatePick}
        options={screenOptions('car-outline', true)}
      />
      <TabStack.Screen
        name="Appointments"
        component={DatePick}
        options={screenOptions('calendar-outline', true)}
      />
      <TabStack.Screen
        name="Profile"
        component={DatePick}
        options={screenOptions('person-outline', true)}
      />
    </TabStack.Navigator>
  );
};

export default DashboardRoutes;
