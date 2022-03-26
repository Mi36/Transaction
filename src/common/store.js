import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import transactionReducer from '../ducks/transactions';
import otherDataReducer from '../ducks/others';
const rootReducer = combineReducers({
  transactions: transactionReducer,
  otherData: otherDataReducer, //  this is a dummy reducer, in this way redux store to be easily expanded
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
