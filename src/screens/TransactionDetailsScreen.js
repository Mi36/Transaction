import moment from 'moment';
import React, {useEffect} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactionDetails} from '../actions/transactionsActions';
import AppText, {TextVariants} from '../components/AppText';
import Button from '../components/Button';
import Cell from '../components/Cell';
import Loader from '../components/Loader';
import {Colors} from '../styles/colors';
import {styles} from '../styles/trasactionDetailsScreen';

const TransactionDetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const currentTransaction = useSelector(state => state.currentTransaction);
  const {id} = route.params;
  const {
    transactionDetails: {
      reference_number,
      cf_number,
      name,
      bank_name,
      payout_location,
      account_number,
      createdAt,
      receiving_amount,
      paid_amount,
    },
    loading,
  } = currentTransaction;

  useEffect(() => {
    dispatch(fetchTransactionDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView bounces={false}>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.direction}>
            <View style={{flex: 1}}>
              <Cell
                valueColor={Colors.blue_2}
                label={'Transaction reference number'}
                value={reference_number}
              />
            </View>
            <View style={{flex: 1}}>
              <Cell label="CE Number" value={cf_number} />
            </View>
          </View>
          <Cell label="Beneficiary name" value={name} />
          <View style={styles.direction}>
            <View style={{flex: 1}}>
              <Cell label="Beneficiary bank/Agent" value={bank_name} />
            </View>
            <View style={{flex: 1}}>
              <Cell label="Payout Location" value={payout_location} />
            </View>
          </View>
          <View style={styles.direction}>
            <View style={{flex: 1}}>
              <Cell label="Account number" value={account_number} />
            </View>
            <View style={{flex: 1}}>
              <Cell
                label="Payment date"
                value={moment.unix(createdAt).format('YYYY-MM-DD')}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 25, alignItems: 'center'}}>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginBottom: 18,
          }}
          source={require('../assets/tick.png')}
        />
        <AppText variant={TextVariants.L} color={Colors.green}>
          Transaction Completed
        </AppText>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'green'}}>
          <AppText>{receiving_amount} PKR</AppText>
          <AppText>Receiving amount</AppText>
        </View>
        <View style={{width: 3, backgroundColor: 'red'}} />
        <View style={{flex: 1}}>
          <AppText>{paid_amount} AED</AppText>
          <AppText>Total paid</AppText>
        </View>
      </View>
      <View style={styles.direction}>
        <Button
          label={'NEW TRANSACTION'}
          labelColor={Colors.white}
          buttonColor={Colors.blue}
        />
        <Button
          label={'SEND RECEIPT'}
          labelColor={Colors.grey_2}
          buttonColor={Colors.grey}
        />
      </View>
    </ScrollView>
  );
};

export default TransactionDetailsScreen;
