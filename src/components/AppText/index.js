import {StyleSheet, Text} from 'react-native';
import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Colors} from '../../styles/colors';
import concat from '../../common/utils/concat';

export const TextVariants = {
  L: 'large',
  M: 'medium',
  Base: 'base',
  S: 'small',
  XS: 'xsmall',
};

const AppText = props => {
  const {variant, color, style, children, ...restProps} = props;

  const styling = useMemo(() => {
    return concat(styles[variant], {color}, style);
  }, [color, variant, style]);

  return (
    <Text style={styling} allowFontScaling={false} {...restProps}>
      {children}
    </Text>
  );
};

export default AppText;

AppText.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  variant: PropTypes.string,
};

AppText.defaultProps = {
  variant: TextVariants.Base,
  color: Colors.black,
  style: {},
};

const styles = StyleSheet.create({
  large: {
    fontSize: 26,
  },
  medium: {
    fontSize: 20,
  },
  base: {
    fontSize: 18,
  },
  small: {
    fontSize: 16,
  },
  xsmall: {
    fontSize: 13,
  },
});
