import {
  FETCH_TRANSACTIONS_FAIL,
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTION_DETAILS_FAIL,
  FETCH_TRANSACTION_DETAILS_REQUEST,
  FETCH_TRANSACTION_DETAILS_SUCCESS,
  RESET_TRANSACTION_DETAILS,
} from '../constants/transactionsConstants';

export const transactionsReducer = (
  state = {
    transactions: [],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_REQUEST:
      return {
        loading: true,
        transactions: [],
        error: null,
      };

    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_TRANSACTIONS_FAIL:
      return {
        ...state,
        loading: false,
        transactions: [],
        error: action.payload,
      };
    default:
      return {...state};
  }
};

export const transactionDetailsReducer = (
  state = {
    transactionDetails: {},
  },
  action,
) => {
  switch (action.type) {
    case FETCH_TRANSACTION_DETAILS_REQUEST:
      return {
        loading: true,
        transactionDetails: {},
        error: null,
      };
    case FETCH_TRANSACTION_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactionDetails: action.payload,
        error: null,
      };

    case FETCH_TRANSACTION_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        transactionDetails: {},
        error: action.payload,
      };
    case RESET_TRANSACTION_DETAILS:
      return {
        loading: true,
        transactionDetails: {},
        error: null,
      };

    default:
      return {...state};
  }
};
