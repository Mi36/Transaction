import {StyleSheet, Text} from 'react-native';
import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Colors} from '../../styles/colors';
import concat from '../../common/utils/concat';

export const TextVariants = {
  //XXXL: 'xxxlarge',
  //XXL: 'xxlarge',
  //XL: 'xlarge',
  L: 'large',
  //M: 'medium',
  Base: 'base',
  //S: 'small',
  XS: 'xsmall',
  // XXS: 'smallest',
};

const AppText = props => {
  const {
    bold,
    left,
    center,
    right,
    variant,
    color,
    style,
    children,
    semiBold,
    regular,
    ...restProps
  } = props;

  const styling = useMemo(() => {
    return concat(
      bold && styles.bold,
      semiBold && styles.semiBold,
      regular && styles.regular,
      left && styles.left,
      center && styles.center,
      right && styles.right,
      styles[variant],
      {color},
      style,
    );
  }, [bold, semiBold, regular, left, center, right, color, variant, style]);

  return (
    <Text style={styling} allowFontScaling={false} {...restProps}>
      {children}
    </Text>
  );
};

export default AppText;

AppText.propTypes = {
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  regular: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  style: PropTypes.object,
};

AppText.defaultProps = {
  bold: false,
  semiBold: false,
  regular: true,
  left: true,
  variant: TextVariants.Base,
  color: Colors.black,
  style: {},
};

const styles = StyleSheet.create({
  xxxlarge: {
    fontSize: 60,
  },
  xxlarge: {
    fontSize: 38,
  },
  xlarge: {
    fontSize: 34,
  },
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
    fontSize: 12,
  },
  smallest: {
    fontSize: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  semiBold: {
    fontWeight: '600',
  },
  regular: {
    fontWeight: '400',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});
