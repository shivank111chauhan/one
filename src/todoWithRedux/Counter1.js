import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addition, subtarction} from './Action';
import {StyleSheet} from 'react-native';

const Counter1 = () => {
  const [HEADING, setHEADING] = useState('');
  const [CONTENT, setCONTENT] = useState('');
  let DATA = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <View>
        <View>
          <Text style={styles.text}>{item.heading}</Text>
          <Text style={styles.text}>{item.content}</Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('todo', {
              id: item.id,
              heading: item.heading,
              content: item.content,
            });
          }}>
          <Text style={styles.right}>View</Text>
        </TouchableOpacity> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Heading"
            onChangeText={e => setHEADING(e)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Enter TO-DO"
            onChangeText={e => setCONTENT(e)}></TextInput>
          <View style={{margin: 10}}>
            <Button
              title="setData"
              onPress={() => {
                dispatch(addition(HEADING, CONTENT));
              }}
            />
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View>
          {DATA.length == 0 ? (
            <View>
              <Text style={styles.empty}>
                ToDo is Empty Please enter a value
              </Text>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  items: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    padding: 5,
  },
  right: {
    textAlign: 'center',
    marginTop: 10,
    margin: 20,
    padding: 5,
    backgroundColor: 'green',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
    borderRadius: 20,
    textAlign: 'center',
  },
  empty: {
    margin: 40,
    textAlign: 'center',
    fontSize: 30,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});

export default Counter1;
