import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#0092a1',
    alignItems: 'center',
    justifyContent: 'center'
  },

  interactionArea: {
    padding: 2
  },

  mainText: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 3,
    fontWeight: '700'
  },

  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20,
    padding: 2,
    color: '#fff',
  },

  button: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 40
  },

  buttonText: {
    color: '#0092a1',
    fontSize: 23,
    fontWeight: '700'
  },

  moreActions: {
    fontSize: 15,
    color: '#fff',
    marginTop: 3
  }
})