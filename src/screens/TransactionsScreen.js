import moment from 'moment';
import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchTransactions,
  resetTransactionDetails,
} from '../actions/transactionsActions';
import Loader from '../components/Loader';
import TransactionItem from '../components/TransactionItem';
import {styles} from '../styles/trasactionScreen';

const TransactionsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(state => state.transactionsList);
  const {transactions, loading} = transactionsList;
  console.log(transactions);

  React.useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const renderItem = ({item}) => (
    <TransactionItem
      dateOfPayment={moment.unix(item.createdAt).format('YYYY-MM-DD')}
      transferType={item.transfer_type}
      receivingAmount={item.receiving_amount}
      name={item.name}
      bankName={item.bank_name}
      title={item.title}
      onPress={() => {
        dispatch(resetTransactionDetails());
        navigation.navigate('TRANSACTION_DETAILS', {
          id: item.id,
        });
      }}
    />
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TransactionsScreen;
