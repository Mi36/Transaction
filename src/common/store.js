import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  transactionDetailsReducer,
  transactionsReducer,
} from '../reducers/transactionsReducers';

const rootReducer = combineReducers({
  transactionsList: transactionsReducer,
  currentTransaction: transactionDetailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
