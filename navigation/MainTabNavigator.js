import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NewAppointmentScreen from '../screens/NewAppointmentScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'פגישות',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const NewAppointmentStack = createStackNavigator(
  {
    NewAppointment: NewAppointmentScreen,
  },
  config
);

NewAppointmentStack.navigationOptions = {
  tabBarLabel: 'פגישה חדשה',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

NewAppointmentStack.path = '';

const FavoritesStack = createStackNavigator(
  {
    Settings: FavoritesScreen,
  },
  config
);

FavoritesStack.navigationOptions = {
  tabBarLabel: 'מועדפים',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

FavoritesStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NewAppointmentStack,
  FavoritesStack,
});

tabNavigator.path = '';

export default tabNavigator;
