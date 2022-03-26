import axios from 'axios';

const FETCH_TRANSACTIONS_SUCCESS =
  'ducks/transactions/FETCH_TRANSACTIONS_SUCCESS';
const FETCH_TRANSACTIONS_FAIL = 'ducks/transactions/FETCH_TRANSACTIONS_FAIL';
const FETCH_TRANSACTION_DETAILS_SUCCESS =
  'ducks/transactions/FETCH_TRANSACTION_DETAILS_SUCCESS';
const FETCH_TRANSACTION_DETAILS_FAIL =
  'ducks/transactions/FETCH_TRANSACTION_DETAILS_FAIL';

const initialState = {
  transactions: null,
  currentTransaction: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        loading: false,
        success: true,
        transactions: action.payload,
      };
    case FETCH_TRANSACTIONS_FAIL:
      return {
        loading: false,
        transactions: null,
        error: action.payload,
      };
    case FETCH_TRANSACTION_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        currentTransaction: action.payload,
      };
    case FETCH_TRANSACTION_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        currentTransaction: null,
        error: action.payload,
      };

    default:
      return {...state};
  }
};

export default reducer;

export const fetchTransactions = () => async dispatch => {
  try {
    const transactions = await axios({
      mathod: 'get',
      url: 'https://61769aed03178d00173dad89.mockapi.io/api/v1/transactions',
    });
    dispatch({
      type: FETCH_TRANSACTIONS_SUCCESS,
      payload: transactions?.data,
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
    const transactionDetails = await axios({
      mathod: 'get',
      url: `https://61769aed03178d00173dad89.mockapi.io/api/v1/transactions/${id}`,
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
