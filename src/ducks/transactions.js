import axios from 'axios';
import {BACKEND_URL} from '../common/constants';

const FETCH_TRANSACTIONS_REQUEST =
  'ducks/transactions/FETCH_TRANSACTIONS_REQUEST';
const FETCH_TRANSACTIONS_SUCCESS =
  'ducks/transactions/FETCH_TRANSACTIONS_SUCCESS';
const FETCH_TRANSACTIONS_FAIL = 'ducks/transactions/FETCH_TRANSACTIONS_FAIL';
const FETCH_TRANSACTION_DETAILS_REQUEST =
  'ducks/transactions/FETCH_TRANSACTION_DETAILS_REQUEST';
const FETCH_TRANSACTION_DETAILS_SUCCESS =
  'ducks/transactions/FETCH_TRANSACTION_DETAILS_SUCCESS';
const FETCH_TRANSACTION_DETAILS_FAIL =
  'ducks/transactions/FETCH_TRANSACTION_DETAILS_FAIL';

const initialState = {
  allTransactions: null,
  currentTransaction: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_REQUEST:
      return {
        ...state,
        allTransactions: {
          data: [],
          loading: true,
          error: null,
        },
      };

    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        allTransactions: {
          ...state.allTransactions,
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case FETCH_TRANSACTIONS_FAIL:
      return {
        ...state,
        allTransactions: {
          data: [],
          loading: false,
          error: action.payload,
        },
      };

    case FETCH_TRANSACTION_DETAILS_REQUEST:
      return {
        ...state,
        currentTransaction: {
          data: null,
          loading: true,
          error: null,
        },
      };
    case FETCH_TRANSACTION_DETAILS_SUCCESS:
      return {
        ...state,
        currentTransaction: {
          ...state.currentTransaction,
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case FETCH_TRANSACTION_DETAILS_FAIL:
      return {
        ...state,
        currentTransaction: {
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return {...state};
  }
};

export default reducer;

export const fetchTransactions = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_TRANSACTIONS_REQUEST,
    });
    const allTransactions = await axios({
      mathod: 'get',
      url: BACKEND_URL,
    });
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
