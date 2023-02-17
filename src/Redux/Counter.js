import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addition, subtarction} from './Action';

const Counter = () => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View>
      <Button title="ADD" onPress={() => dispatch(addition())} />
      <Text style={{fontSize: 50, textAlign: 'center'}}>{data}</Text>
      <Button title="SUBTRACT" onPress={() => dispatch(subtarction())} />

      {/* <TextInput onChangeText={}></TextInput> */}
    </View>
  );
};

export default Counter;
