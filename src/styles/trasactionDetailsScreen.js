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
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: 18,
  },
  status: {
    marginTop: 25,
    alignItems: 'center',
  },
  transactionsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.grey_3,
    marginVertical: 25,
  },
  received: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  paid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  divider: {
    width: 1,
    backgroundColor: '#CDCDCD',
    marginVertical: 5,
  },
});
