
import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './src/store/create'

import RootProvider from './src';

const store = createStore();

LogBox.ignoreAllLogs(true)

const App = () => {
  return (
    <Provider store={store}>
        <RootProvider />
    </Provider>
  );
};

export default App;


