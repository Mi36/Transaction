import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../styles/colors';
import AppText, {TextVariants} from '../AppText';

const Header = ({label}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.main, {marginTop: insets.top}]}>
      <AppText
        color={Colors.white}
        style={styles.text}
        variant={TextVariants.Base}>
        {label}
      </AppText>
    </View>
  );
};

export default Header;

AppText.propTypes = {
  label: PropTypes.string,
};

AppText.defaultProps = {
  label: 'Screen header',
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.blue,
    paddingVertical: 12,
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
});
