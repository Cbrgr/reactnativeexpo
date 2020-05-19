import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/views/HomeScreen'
import ScannerScreen from './src/views/ScannerScreen';
import FavouriteScreen from './src/views/FavouriteScreen';
import ProductView from './src/views/ProductView';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
}

function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Yuuka" component={HomeScreen} />
        <Stack.Screen name="Produit" component={ProductView} />
      </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Scanner" component={ScannerScreen} />
        <Tab.Screen name="Favourite" component={FavouriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppNavigator />
  );
}