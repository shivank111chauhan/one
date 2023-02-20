import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import Counter1 from './src/todoWithRedux/Counter1';
import {store} from './src/todoWithRedux/Store';
import Axios from './src/learnAxios/Axios';

const App = () => {
  return (
    <View style={{display: 'flex'}}>
      <Provider store={store}>
        <Counter1 />
      </Provider>
    </View>
    // <View>
    //   <Axios />
    // </View>
  );
};

export default App;
