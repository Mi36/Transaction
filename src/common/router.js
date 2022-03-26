import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';
import TransactionsScreen from '../screens/TransactionsScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TransactionsScreen} />
      <Tab.Screen name="2" component={TransactionsScreen} />
      <Tab.Screen name="3" component={TransactionsScreen} />
      <Tab.Screen name="4" component={TransactionsScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          screenOrientation: 'portrait',
        }}>
        <Stack.Screen name="TRANSACTION" component={Tabs} />
        <Stack.Screen
          name="TRANSACTION_DETAILS"
          component={TransactionDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
