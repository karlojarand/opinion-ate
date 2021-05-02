import {Provider} from 'react-redux';
import store from './store';

import React, { Component }  from 'react';
import RestaurantScreen from './components/RestaurantScreen';

const App = () => (
  <Provider store={store}>
     <RestaurantScreen />
     </Provider>
);

export default App;
