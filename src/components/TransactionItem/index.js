import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import moment from 'moment';

const TransactionItem = ({
  onPress,
  name,
  bankName,
  receivingAmount,
  dateOfPayment,
  transferType,
}) => {
  console.log(moment.unix(1635163948).format('LLLL'));
  return (
    <TouchableOpacity style={styles.main} onPress={onPress} activeOpacity={0.8}>
      <View style={{flex: 6, backgroundColor: 'red', flexDirection: 'row'}}>
        <Image style={styles.image} source={require('../../assets/flag.png')} />
        <View>
          <AppText>{name}</AppText>
          <AppText>{bankName}</AppText>

          <AppText>{transferType}</AppText>
        </View>
      </View>
      <View style={{flex: 4, backgroundColor: 'green'}}>
        <AppText>{receivingAmount} PKR</AppText>
        <AppText>{dateOfPayment}</AppText>
        <Image
          style={{
            height: 20,
            width: 20,
            borderRadius: 10,
          }}
          source={require('../../assets/tick.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  main: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
