import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CounterControler from './src/Components/CounterControler';
import CounterView from './src/Components/CounterView';

const App = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <CounterView counterValue={Counter} />
      <CounterControler setCounterValue={setCounter} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
