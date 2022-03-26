import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchTransactionDetails,
  fetchTransactions,
} from '../ducks/transactions';

const TransactionsScreen = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.otherData);

  React.useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchTransactionDetails(1));
  }, [dispatch]);

  return (
    <View>
      <Text>TransactionDetails</Text>
    </View>
  );
};

export default TransactionsScreen;
