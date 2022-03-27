import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.blue,
    paddingBottom: 12,
  },
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 12,
  },
  direction: {
    flexDirection: 'row',
  },
  subscript: {
    fontSize: 10,
    lineHeight: 37,
    color: Colors.black,
  },
});
