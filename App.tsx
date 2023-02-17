import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './src/Redux/Counter';
import {store} from './src/Redux/Store';

const App = () => {
  return (
    <View style={{display: 'flex'}}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </View>
  );
};

export default App;
