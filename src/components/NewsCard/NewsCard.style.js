import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 20,
  },
  inner_container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginTop: 10,
    textAlign: 'center',
  },
  author: {
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
