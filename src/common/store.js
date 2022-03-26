import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import transactionReducer from '../ducks/transactions';

const store = createStore(transactionReducer, applyMiddleware(thunkMiddleware));

export default store;
