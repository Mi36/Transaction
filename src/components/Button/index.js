import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../AppText';
import PropTypes from 'prop-types';
import {Colors} from '../../styles/colors';

const Button = ({onPress, label, buttonColor, labelColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.main, {backgroundColor: buttonColor}]}>
      <AppText color={labelColor}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  buttonColor: PropTypes.string,
  labelColor: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => {},
  label: 'Press here',
  buttonColor: Colors.blue,
  labelColor: Colors.white,
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 22,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
