import PropTypes from 'prop-types';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../styles/colors';
import AppText, {TextVariants} from '../AppText';

const TransactionItem = ({
  onPress,
  name,
  bankName,
  receivingAmount,
  dateOfPayment,
  transferType,
  color,
}) => {
  return (
    <TouchableOpacity
      style={[styles.main, {backgroundColor: color}]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.firstHalf}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/flag.png')}
          />
        </View>
        <View>
          <AppText
            variant={TextVariants.M}
            color={Colors.blue}
            style={styles.text}>
            {name}
          </AppText>
          <AppText style={styles.text}>{bankName}</AppText>
          <AppText variant={TextVariants.XS}>{transferType}</AppText>
        </View>
      </View>
      <View style={styles.secondHalf}>
        <AppText color={Colors.blue} style={styles.paddingBottom}>
          {receivingAmount}
          <Text style={styles.subscript}> PKR</Text>
        </AppText>
        <AppText variant={TextVariants.XS} style={styles.paddingBottom}>
          {dateOfPayment}
        </AppText>
        <Image
          style={styles.tickContainer}
          source={require('../../assets/tick.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  name: PropTypes.string,
  bankName: PropTypes.string,
  receivingAmount: PropTypes.number,
  dateOfPayment: PropTypes.string,
  transferType: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

TransactionItem.defaultProps = {
  onPress: () => {},
  name: 'Name',
  bankName: 'Bank Name',
  receivingAmount: 100,
  dateOfPayment: 'Date',
  transferType: 'transfer type',
  color: Colors.white,
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 8,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  text: {
    textTransform: 'capitalize',
    paddingBottom: 2,
  },
  firstHalf: {
    flex: 7,
    flexDirection: 'row',
  },
  secondHalf: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    marginRight: 12,
  },
  tickContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  subscript: {
    fontSize: 10,
    lineHeight: 37,
  },
  paddingBottom: {
    paddingBottom: 4,
  },
});
