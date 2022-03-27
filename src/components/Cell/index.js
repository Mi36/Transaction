import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles/colors';
import AppText, {TextVariants} from '../AppText';

const Cell = ({label, value, valueColor}) => {
  return (
    <View style={styles.main}>
      <AppText style={styles.text} variant={TextVariants.XS}>
        {label}
      </AppText>
      <AppText style={styles.text} color={valueColor}>
        {value}
      </AppText>
    </View>
  );
};

export default Cell;

Cell.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  valueColor: PropTypes.string,
};

Cell.defaultProps = {
  label: 'Transaction reference number',
  value: '36528522',
  valueColor: Colors.black,
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.grey,
    padding: 5,
  },
  text: {
    marginVertical: 2,
  },
});
