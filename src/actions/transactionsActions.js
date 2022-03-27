import axios from 'axios';
import {BACKEND_URL} from '../common/constants';
import {
  FETCH_TRANSACTIONS_FAIL,
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTION_DETAILS_FAIL,
  FETCH_TRANSACTION_DETAILS_REQUEST,
  FETCH_TRANSACTION_DETAILS_SUCCESS,
} from '../constants/transactionsConstants';

export const fetchTransactions = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_TRANSACTIONS_REQUEST,
    });
    const allTransactions = await axios({
      mathod: 'get',
      url: BACKEND_URL,
    });
    console.log('allTransactions', allTransactions);
    dispatch({
      type: FETCH_TRANSACTIONS_SUCCESS,
      payload: allTransactions?.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: FETCH_TRANSACTIONS_FAIL,
      payload: message,
    });
  }
};

export const fetchTransactionDetails = id => async dispatch => {
  try {
    dispatch({
      type: FETCH_TRANSACTION_DETAILS_REQUEST,
    });
    const transactionDetails = await axios({
      mathod: 'get',
      url: `${BACKEND_URL}/${id}`,
    });

    dispatch({
      type: FETCH_TRANSACTION_DETAILS_SUCCESS,
      payload: transactionDetails?.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: FETCH_TRANSACTION_DETAILS_FAIL,
      payload: message,
    });
  }
};
