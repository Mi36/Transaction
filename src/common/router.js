import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/Header';
import BillPaymentsScreen from '../screens/BillPaymentsScreen';
import CreditCardPaymentScreen from '../screens/CreditCardPaymentScreen';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import TravelCardScreen from '../screens/TravelCardScreen';
import {Colors} from '../styles/colors';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export const TopTabs = () => {
  return (
    <>
      <Header label={'Transaction History'} />
      <Tab.Navigator
        screenOptions={{
          lazy: true,
          tabBarLabelStyle: {fontSize: 12, textTransform: 'none'},
        }}>
        <Tab.Screen
          name="Remittance"
          component={TransactionsScreen}
          options={{
            tabBarLabel: 'Remittance',
          }}
        />
        <Tab.Screen
          name="CreditCardPayment"
          component={CreditCardPaymentScreen}
          options={{
            tabBarLabel: 'Credit Card Payment',
          }}
        />
        <Tab.Screen
          name="TravelCardReload"
          component={TravelCardScreen}
          options={{
            tabBarLabel: 'Travel Card Reload',
          }}
        />
        <Tab.Screen
          name="BillPayments"
          component={BillPaymentsScreen}
          options={{
            tabBarLabel: 'Bill Payments',
          }}
        />
      </Tab.Navigator>
    </>
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
          component={TopTabs}
          options={{
            headerShown: false,
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
