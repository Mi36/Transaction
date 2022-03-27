import moment from 'moment';
import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchTransactions,
  resetTransactionDetails,
} from '../actions/transactionsActions';
import Loader from '../components/Loader';
import TransactionItem from '../components/TransactionItem';
import {Colors} from '../styles/colors';
import {styles} from '../styles/trasactionScreen';

const TransactionsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(state => state.transactionsList);
  const {transactions, loading} = transactionsList;

  React.useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const onNavigate = item => {
    dispatch(resetTransactionDetails());
    navigation.navigate('TRANSACTION_DETAILS', {
      id: item.id,
    });
  };

  const renderItem = ({item, index}) => (
    <TransactionItem
      color={index % 2 === 0 ? Colors.grey : Colors.white}
      dateOfPayment={moment.unix(item.createdAt).format('YYYY-MM-DD')}
      transferType={item.transfer_type}
      receivingAmount={item.receiving_amount}
      name={item.name}
      bankName={item.bank_name}
      title={item.title}
      onPress={() => onNavigate(item)}
    />
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TransactionsScreen;
