import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import {Colors} from '../styles/colors';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, textTransform: 'none'},
      }}>
      <Tab.Screen name="Remittance" component={TransactionsScreen} />
      <Tab.Screen name="Credit Card Payment" component={TransactionsScreen} />
      <Tab.Screen name="Travel Card Reload" component={TransactionsScreen} />
      <Tab.Screen name="Bill Payments" component={TransactionsScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerStyle: {
            backgroundColor: Colors.blue,
          },
        }}>
        <Stack.Screen
          name="TRANSACTION"
          component={Tabs}
          options={{
            title: 'Transaction History',
          }}
        />
        <Stack.Screen
          options={{
            title: 'Transaction Details',
          }}
          name="TRANSACTION_DETAILS"
          component={TransactionDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
