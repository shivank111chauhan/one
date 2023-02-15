import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CounterView = ({counterValue}) => {
  return (
    <View>
      <Text style={{fontSize: 40}}>{counterValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterView;
