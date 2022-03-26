import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/common/router';
import store from './src/common/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
