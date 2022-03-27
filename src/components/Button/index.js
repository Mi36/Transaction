import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../AppText';

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

const styles = StyleSheet.create({
  main: {
    padding: 10,
    borderRadius: 25,
  },
});
