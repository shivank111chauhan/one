import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addition, subtarction} from './Action';
import {StyleSheet} from 'react-native';

const Counter = () => {
  const [counter, setcounter] = useState(1);
  let data = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View>
      <Button title="ADD" onPress={() => dispatch(addition(counter))} />
      <Text style={{fontSize: 50, textAlign: 'center'}}>{data}</Text>
      <Button title="SUBTRACT" onPress={() => dispatch(subtarction(counter))} />

      <TextInput
        style={Styles.inputText}
        placeholder="Enter a value"
        keyboardType="numeric"
        value={counter}
        onChangeText={e => setcounter(e)}></TextInput>
      <Button title="Reset" onPress={e => setcounter('')} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputText: {
    padding: 10,
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 70,
    marginBottom: 20,
  },
});

export default Counter;
