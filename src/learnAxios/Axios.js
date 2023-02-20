import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {StyleSheet} from 'react-native';

const Axios = () => {
  const [data, setdata] = useState([]);
  const [isError, setIsError] = useState('');
  useEffect(() => {
    axios
      .post('https://reactnative.dev/movies.json', {
        id: '1',
        title: 'Star Wars',
        releaseYear: '1977',
      })
      .then(res => setdata(res.data.movies))
      .catch(error => console.log(error));
  });
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.cardView}>
              <Text style={styles.itemContainer}>
                Movie Name :- {item.title}
              </Text>
              <Text style={styles.itemContainer}>
                Release year :-{item.releaseYear}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemContainer: {
    padding: 10,
    fontSize: 16,
    color: '#333',
    borderRadius: 10,
  },
  cardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default Axios;
