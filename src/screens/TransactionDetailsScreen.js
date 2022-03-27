import moment from 'moment';
import React, {useEffect} from 'react';
import {Image, ScrollView, View, Text} from 'react-native';
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
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          marginVertical: 25,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <AppText variant={TextVariants.L} color={Colors.green}>
            {receiving_amount} <Text style={styles.subscript}> PKR</Text>
          </AppText>
          <AppText>Receiving amount</AppText>
        </View>
        <View style={{width: 1, backgroundColor: 'red', marginVertical: 5}} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <AppText variant={TextVariants.L} color={Colors.red}>
            {paid_amount} <Text style={styles.subscript}> AED</Text>
          </AppText>
          <AppText>Total paid</AppText>
        </View>
      </View>
      <View style={styles.direction}>
        <View style={{flex: 1, marginHorizontal: 5}}>
          <Button
            label={'NEW TRANSACTION'}
            labelColor={Colors.white}
            buttonColor={Colors.blue}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 5}}>
          <Button
            label={'SEND RECEIPT'}
            labelColor={Colors.grey_2}
            buttonColor={Colors.grey}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default TransactionDetailsScreen;
