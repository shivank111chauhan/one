import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CounterControler = ({setCounterValue}) => {
  const decrementValue = () => {
    setCounterValue(tempValue => {
      return tempValue - 1;
    });
  };
  const incrementValue = () => {
    setCounterValue(tempValue => {
      return tempValue + 1;
    });
  };

  return (
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.touchableOpacitybtn}
        onPress={() => decrementValue()}>
        <Text style={{fontSize: 20}}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacitybtn}
        onPress={() => incrementValue()}>
        <Text style={{fontSize: 20}}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  touchableOpacitybtn: {
    backgroundColor: 'blue',
    padding: 20,
    color: 'white',
  },
});
export default CounterControler;
