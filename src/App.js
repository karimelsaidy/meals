import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import MealsNavigator from './navigators/MealsNavigator';
import store from './store/store';
import {Provider} from 'react-redux';

enableScreens();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;
